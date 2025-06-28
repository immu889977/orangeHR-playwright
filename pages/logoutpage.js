

exports.logoutpage =class logoutpage{
constructor(page){

this.page=page;

}

async logout(){

await this.page.locator('.oxd-userdropdown-name').click()

await this.page.locator('[role="menuitem"]' , {hasText: 'Logout'}).click();

}

}