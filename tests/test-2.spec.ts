import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/search?q=todolist&oq=todolist&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTExMzQ4ajBqMqgCALACAQ&sourceid=chrome&ie=UTF-8');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dtodolist%26oq%3Dtodolist%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCTExMzQ4ajBqMqgCALACAQ%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3D5ycJa5eHE8eX4-EP4YmAyAg&q=EgSCKTxHGOjPpNgGIjC0ttfo2djpgb89yfkXrTzKdNjzKkiuMtJ7GcsOXvI22bvddz_4cuJ1FoMsohXaEBQyAVJaAUNgs5_MmP7U6aWLAQ');
});