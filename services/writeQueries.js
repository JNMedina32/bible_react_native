async function saveSettings(db, values, func) {
  console.log("values: ", values);
  const {
    bible_translation,
    font_size,
    notifications,
    notification_days,
    notification_time,
    user_id,
  } = values;

  await db
    .runAsync(
      `UPDATE userSettings SET bible_translation = ?, font_size = ?, notifications = ?, notification_days = ?, notification_time = ? WHERE user_id = ?;`,
      [
        bible_translation,
        font_size,
        notifications,
        notification_days,
        notification_time,
        user_id,
      ]
    )
    .then(() => {
      func({ type: "INITIAL_USER_STATE", payload: values });
    });
}

export { saveSettings };
