export class HomePage
{
    constructor(page)           
    {
this.registerlink=page.getByRole('link',{name:' Signup / Login'});
this.name=page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[2]');
this.email=page.locator('//*[@id="form"]/div/div/div[3]/div/form/input[3]');
this.signupButton=page.getByRole('button',{name:'Signup'});
this.logo=page.getByAltText('Website for automation practice')
}

    async Register()
    {
        await this.registerlink.click();
        await this.name.fill('sanjana');
        await this.email.fill('password123');
}
}
