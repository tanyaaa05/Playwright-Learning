/*
| Locator              | Use                                             |
| -------------------- | ----------------------------------------------- |
| `getByAltText()`     | Find image using alt text                       |
| `getByPlaceholder()` | Find input using placeholder text               |
| `getByRole()`        | Find element by role like button, link, heading |
| `getByText()`        | Find element using visible text                 |
| `getByLabel()`       | Find input field using label text               |
| `getByTitle()`       | Find element using title attribute              |
| `getByTestId()`      | Find element using test ID                      |

*/

import { test, expect } from '@playwright/test';

test('Builtin Locators', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    const logoImage = await page.getByAltText('company-branding');
    await expect(logoImage).toBeVisible();

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name: 'Login'}).click();

    const name = await page.locator('//p[contains(@class,"oxd-userdropdown-name")]').textContent();
    console.log(name);
    await expect(page.getByText(name)).toBeVisible();

    await page.close();

})

