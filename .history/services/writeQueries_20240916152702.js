async function saveSettings(db, values, func) {
  const result = await db.runAsync(
    `UPDATE settings SET font_size = ?, theme = ? WHERE id = 1;`,
    [values.font_size, values.theme]
  );
  await func(result);
}
