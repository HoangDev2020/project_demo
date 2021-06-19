import {register, authStateChanged} from "/project/js/main.js"
authStateChanged()

const $template = document.createElement('template')
$template.innerHTML = `
    <form class="register-form auth-form">
        <h2 style="text-align: center; color: white;" id="register-name">Đăng kí</h2>
        <hr>
            
        <div class="input-wrapper">
            <input type="text" id="name" class="input-main" placeholder="Tên">
            <div id="name-error" class="input-error"></div>
        </div>
            
        <div class="input-wrapper">
            <input type="email" id="email" class="input-main" placeholder="Email">
            <div id="email-error" class="input-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" id="password" class="input-main" placeholder="Mật khẩu">
            <div id="password-error" class="input-error"></div>
        </div>
        <div class="input-wrapper">
            <input type="password" id="password-confirmation" class="input-main" placeholder="Nhập lại mật khẩu">
            <div id="password-confirmation-error" class="input-error"></div>
        </div>
        <div class="input-wrapper">
            <button id="btn_register">Đăng kí</button>
        </div>
    </form>
`




export default class RegisterForm extends HTMLElement {
    constructor() {
        super()
        this.appendChild($template.content.cloneNode(true))
        const $registerform = this.querySelector('.register-form')


        $registerform.addEventListener('submit' , async (e) => {
            e.preventDefault()
            
            // get the information
            const $name = this.querySelector('#name').value.trim()
            const $email = this.querySelector('#email').value.trim()
            const $password = this.querySelector('#password').value.trim()
            const $passwordConfirmation = this.querySelector('#password-confirmation').value.trim()
    
            // error message
            const $nameError = this.querySelector('#name-error')
            const $emailError = this.querySelector('#email-error')
            const $passwordError = this.querySelector('#password-error')
            const $passwordConfirmationError = this.querySelector('#password-confirmation-error')

            if($name == '') {
                $nameError.textContent = "Xin hãy điền tên"
            } else {
                $nameError.innerHTML = ""
            }
            if($email == '') {
                $emailError.textContent = "Xin hãy điền email"
            } else {
                $emailError.innerHTML = ""
            }
            if($password == '') {
                $passwordError.textContent = "Xin hãy điền mật khẩu"
            } else {
                $passwordError.innerHTML = ""
            }
            if($passwordConfirmation == '') {
                $passwordConfirmationError.textContent = "Xin hãy điền lại mật khẩu"
            } else if($password != $passwordConfirmation) {
                $passwordConfirmationError.innerHTML = "Mật khẩu không khớp"
                
            }
            else {
                $passwordConfirmationError.innerHTML = ""
                try{
                    await register($name, $email, $password)
                    
                } catch(error) {
                    alert(error.message)
                    
                }
           }
        })
    }
}

window.customElements.define('register-form', RegisterForm)