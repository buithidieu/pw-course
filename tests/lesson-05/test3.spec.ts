import { test } from '@playwright/test';

test ('Bai Tap 3', async ({page}) => {
    await test.step('Navigate to the page', async() => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click on bai hoc 3", async() => {
        await page.locator("//a[contains(text(), 'Bài học 3: Todo page')]").click();
    })
    //them moi 100 todo
    await test.step("add todo", async() => {
        for (let i =1; i <= 100; i++) { 
        await page.locator("//input[@id='new-task']").fill(`To do ${i}`);
        await page.locator("//button[@id='add-task']").click();
        }
    });
    //xoa cac todo co so le
    await test.step("xoa todo so le", async() =>{
        for (let j = 0; j<= 100; j++){
            if (j % 2 === 1){
            await page.locator(`//button[@onclick="deleteTask(${j})"]`).click();
            }
        }
    })


});