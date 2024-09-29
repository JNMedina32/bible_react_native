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
            notifications,
            notification_time,
            notification_days,
            user_id,
          ]
        )
        
    }),

    
  ]);
}

export { saveSettings };
