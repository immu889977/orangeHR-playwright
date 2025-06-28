exports.loginpage=class loginpage {
 constructor(page){

this.page = page;
this.username1 = '//input[@name="username"]';
this.password1 = '//input[@name="password"]';
this.loginbtn  =  '[type="submit"]';
}

async visitwebsite(){


await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
}

async login(username , password ) {

await this.page.locator(this.username1).fill(username);
await this.page.locator(this.password1).fill(password);
await this.page.locator(this.loginbtn).click();


}






}