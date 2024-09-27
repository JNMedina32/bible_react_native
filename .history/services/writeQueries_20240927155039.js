async function saveSettings(db, values, func) {
  const result = await db.runAsync(
    `UPDATE userSettings SET bible_translation = ?, font_size = ?, notifications = ?, notification_time = ?, notification_days = ? WHERE user_id = ? RETURNING *;`,
    [values.values.font_size, values.theme]
  );
  await func(result);
}