async function saveSettings(db, values, func) {
  const {
    user_id,
    bible_translation,
    font_size,
    notifications,
    notification_days,
    notification_time,
  } = values;
  console.log("values: ", values);
  Promise.all([
    db.withExclusiveTransactionAsync(async (txn) => {
      await txn
        .execAsync(
          `UPDATE userSettings SET bible_translation = ?, font_size = ?, notifications = ?, notification_time = ?, notification_days = ? WHERE user_id = ?;`,
          [
            bible_translation,
            font_size,
            font_size,
            notification_time,
            notification_days,
            user_id,
          ]
        )
        .then(async () => {
          const settings = await txn
            .getFirstAsync(`SELECT * FROM userSettings WHERE user_id = ?;`, [
              user_id,
            ])
            .then((settings) => {
              console.log("Settings: ", settings);
              func({ type: "INITIAL_USER_STATE", payload: settings });
            });
          func({ type: "INITIAL_USER_STATE", payload: settings });
        });
    }),
    // db.withExclusiveTransactionAsync(async (txn) => {
    //   const settings = await txn.getFirstAsync(
    //     `SELECT * FROM userSettings WHERE user_id = ?;`,
    //     [user_id]
    //   );
    //   console.log("Settings: ", settings);
    //   func({ type: "INITIAL_USER_STATE", payload: settings });
    // }),
  ]);
}

export { saveSettings };
