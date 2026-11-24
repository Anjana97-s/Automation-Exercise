import {expect,test} from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test('Login Functionality Test',async({page})=>{

    const loginpage=new LoginPage(page);
    await page.goto('https://automationexercise.com/login');
    await loginpage.login();

})