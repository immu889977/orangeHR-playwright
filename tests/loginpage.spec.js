const {test , expect} = require ('@playwright/test')
import {Adminpage } from '../pages/adminpage';
import { loginpage } from '../pages/loginpage'
import { logoutpage } from '../pages/logoutpage';



test('test' , async({page})=>{

const login=new loginpage(page);
await login.visitwebsite()
await login.login('Admin', 'admin123')

const admin = new Adminpage(page); 
await admin.gotoadmin();
await admin.username("king")
await admin.dropdowns("Admin")
//await page.waitForTimeout(3000)
await admin.empname("Rah")

const logout = new logoutpage (page);      
await logout.logout()

await page.close();


})
