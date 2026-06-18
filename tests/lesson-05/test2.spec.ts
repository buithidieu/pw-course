import { test } from '@playwright/test'

test ('bai tap 2', async({page}) => {
    await test.step('Navigate to the page', async() => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click on Bai hoc 2", async() => {
        await page.locator("//a[contains(text(), 'Bài học 2: Product page')]").click();
    });
    await test.step("Add product to the cart", async() => {
        await page.locator("//button[@data-product-id=1]").dblclick();
        await page.locator("//button[@data-product-id=2]").dblclick();
        await page.locator("//button[@data-product-id=2]").click();
        await page.locator("//button[@data-product-id=3]").click();
    });


})