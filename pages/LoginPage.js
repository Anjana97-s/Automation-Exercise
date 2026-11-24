export class LoginPage
{
    constructor(page)
    {

    this.loginlink=page.getByRole('link',{name:' Signup / Login'});
      this.email = page.locator('//*[@id="form"]/div/div/div[1]/div/form/input[2]');

        this.password = page.getByRole('textbox', {
            name: 'Password'
        });

    this.loginButton=page.getByRole('button', { name: 'Login' }) ;
    }    

    async login()
    {
       await this.email.fill('asnjana@gmail.com');
       await this.password.fill('pass@123');
       await this.loginButton.click();
    }
}