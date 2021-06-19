import {login, authStateChanged} from "/project/js/main.js"
authStateChanged()

const login_form = document.createElement('template')
login_form.innerHTML = `<form class="login-form auth-form">
                            <h2 style="text-align: center;" id="login-name">Đăng nhập</h2>
                            <hr>
    
                            <div class="input-wrapper">
                                <input type="email" id="email" class="input-main" placeholder="Email">
                                <div id="email-error" class="input-error"></div>
                            </div>

                            <div class="input-wrapper">
                                <input type="password" id="password" class="input-main" placeholder="Mật khẩu">
                                <div id="password-error" class="input-error"></div>
                            </div>

                            <div class="input-wrapper">
                                <button id="btn_login">Đăng nhập</button>
                            </div>
                        </form>`


export default class LoginForm extends HTMLElement {
    constructor() {
        super()
        this.appendChild(login_form.content.cloneNode(true))

        const $loginform = this.querySelector(".login-form")

        $loginform.addEventListener("submit", async (e) => {
            e.preventDefault()

            const $email = this.querySelector('#email').value.trim()
            const $password = this.querySelector('#password').value.trim()

            const $emailError = this.querySelector('#email-error')
            const $passwordError = this.querySelector('#password-error')

            if($email == '') {
                $emailError.innerHTML = "Hãy điền email"
            } else {
                $emailError.innerHTML = ""
            }
            if($password == '') {
                $passwordError.innerHTML = "Xin hãy điền mật khẩu"
            } else {
                $passwordError.innerHTML = ""
                try {
                    await login($email, $password)
                } catch(error) {
                    alert(error.message)
                }
            }
        })
    }
}

window.customElements.define('login-form', LoginForm)