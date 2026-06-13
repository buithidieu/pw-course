import {expect, test}  from  '@Playwright/test';

test('bai tap1', async ({page}) => {
    await test.step("Navigate to page", async() => {
       await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click on Bai hoc 1", async() => {
       await page.locator("//a[contains(text(), 'Register Page')]").click();
    });
    //nhap thong tin day du
    await test.step("Fill out the information", async() =>{
        await page.locator("//input[@name='username']").fill('Bui Thi Dieu');
        await page.locator("//input[@name='email']").fill('dieuhanu2008@gmail.com');
        await page.locator("//input[@value='female']").check();
        await page.locator("//input[@value='traveling']").check();
        await page.locator("//select[@name='interests']").selectOption("Technology");
        await page.locator("//input[@id='dob']").fill('1995-08-20');
        await page.locator("//textarea[@name='bio']").fill("BIO");
        await page.locator("//input[@name='newsletter']").click();
        await page.locator("//div[@id='starRating']").click();
        await page.locator("//button[@type='submit']").click();
    });

});