import { test, expect } from "playwright/test"

test('imdad on role ', async ({ page }) => {


  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator('//input[@name="username"]').fill('Admin')
  await page.locator('//input[@name="password"]').fill('admin123')
  await page.locator('[type="submit"]').click();


  await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]', { hasText: 'Admin' }).click()

  await page.locator('[class="oxd-input oxd-input--active"]').nth(1).fill("king");
  await page.locator('[class="oxd-select-wrapper"]').first().click();
  await page.locator('[role="option"]', { hasText: 'Admin' }).click();

  const holder = await page.getByPlaceholder('Type for hints...')
  await holder.click();
  await holder.pressSequentially('Rah', { delay: 1000 });
  await page.waitForTimeout(2000)
  const suggestionOption = page.locator('div[role="option"]:has-text("Rahul Das")');
  await suggestionOption.first().waitFor({ state: 'visible' });

  // Step 4: Click on the suggestion
  await suggestionOption.first().click();

  // Optional: Validate that it's filled
 


}


)


