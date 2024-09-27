async function saveSettings(db, values, func) {
  const result = await db.runAsync(
    `UPDATE userSettings SET bible = ?, ? = ? WHERE id = 1;`,
    [values.font_size, values.theme]
  );
  await func(result);
}
