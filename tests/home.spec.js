import { expect, test } from "@playwright/test";
import { HomePage } from  "../pages/homePage";
import { LoginPage } from "../pages/loginPage";

test('verify register functionality', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await page.goto('https://automationexercise.com/');

    await loginPage.loginlink.click();

    await homePage.Register();

});

test('Verify logo',async ({page})=>{

        const homePage = new HomePage(page);
        await page.goto('https://automationexercise.com/');
        await expect(homePage.logo).toBeVisible();
})

test('Verify title',async({page})=>{
        const homePage = new HomePage(page);
        await page.goto('https://automationexercise.com/');
        await expect(page).toHaveTitle('Automation Exercise')

})
test('Verify URL',async({page})=>{
            const homePage = new HomePage(page);
            await page.goto('https://automationexercise.com/');
            await expect(page).toHaveURL(/automationexercise\.com/)
    
    
        })