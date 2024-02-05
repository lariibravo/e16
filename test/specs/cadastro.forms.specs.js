const FormsScreen = require("../screens/forms.screen")

let initial = 'Form components'

describe('Acessar formulario para preenchimento', () => {
    it('Deve acessa o formulario', async () => {
        await FormsScreen.gotToForm()
    });

    it('Deve cadastrar um formulario', async () => {

        await FormsScreen.gotToForm()

        const Text = '~text-input'
        const Botton_click = '~Dropdown'
        const selector = 'new UiSelector().text("Appium is awesome").className("android.widget.CheckedTextView")'
        const button = await $(`android=${selector}`)

        await $(Text).setValue('Teste Wdio')
        await $(Botton_click).click()
        await button.click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await $('~button-Active').click()

        expect (await $('//android.widget.TextView').getText(initial))

    })

})