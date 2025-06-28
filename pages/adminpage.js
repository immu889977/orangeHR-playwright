exports.Adminpage =
    class Adminpage {
        constructor(page) {
            // adminPage.js
            this.page = page;
            // Locator for Username input using label-based XPath
            this.usernameInput = page.locator('label:has-text("Username") >> xpath=following::input[1]');
        }

        async gotoadmin() {
            await this.page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]', { hasText: 'Admin' }).click()

        }

        async username(username) {

            await this.page.locator('[class="oxd-input oxd-input--active"]').nth(1).fill(username);
        }

        async dropdowns(text) {
            await this.page.locator('[class="oxd-select-wrapper"]').first().click();

            await this.page.locator('[role="option"]', { hasText: text }).click();
        }

        async empname(empname) {

            const holder = await this.page.getByPlaceholder('Type for hints...')
            await holder.click();
            await holder.pressSequentially(empname , { delay: 1000 });
            await this.page.waitForTimeout(2000)
            const suggestionOption = this.page.locator('div[role="option"]:has-text("Rahul Das")');
            await suggestionOption.first().waitFor({ state: 'visible' });

            // Step 4: Click on the suggestion
            await suggestionOption.first().click();

            await this.page.locator('[class="oxd-select-wrapper"]').nth(1).click()
            await this.page.locator('[class="oxd-select-option"]',{hasText: "Enabled"}).click();
            await this.page.waitForTimeout(5000);



        }






}



    

