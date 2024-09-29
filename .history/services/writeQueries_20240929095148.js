async function saveSettings(db, values, func) {
  const {
    user_id,
    translation,
    font_size,
    notifications,
    notification_days,
    notification_time,
  } = values;
  console.log("values: ", values);
  Promise.all([
    db.withExclusiveTransactionAsync(async (txn) => {
      await txn.execAsync(
        `UPDATE userSettings SET bible_translation = ?, font_size = ?, notifications = ?, notification_time = ?, notification_days = ? WHERE user_id = ?;`,
        [
          translation,
          font_size,
          notifications,
          notification_time,
          notification_days,
          user_id,
        ]
      );
      const result = await txn.getFirstAsync(
        `SELECT * FROM userSettings WHERE user_id = ?;`,
        [user_id]
      );
      console.log("result: ", result);
      func({ type: "INITIAL_USER_STATE", payload: result });
    }),
  ]);
}

export { saveSettings };
