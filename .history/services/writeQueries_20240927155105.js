async function saveSettings(db, values, func) {
  const result = await db.runAsync(
    `UPDATE userSettings SET bible_translation = ?, font_size = ?, notifications = ?, notification_time = ?, notification_days = ? WHERE user_id = ? RETURNING *;`,
    [values.bible_translation, values.font_size, values.notifications, values.theme]
  );
  await func(result);
}
