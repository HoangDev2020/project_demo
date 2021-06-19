const main_menu = document.createElement("template")
main_menu.innerHTML = `<nav id="nav">
                        <h2>V.R.C</h2>
                        <ul>
                            <li><a href="/project/index.html">Trang chủ</a></li>
                            <li><a href="/project/html/quiz.html">Quiz</a></li>
                            <li><a href="/project/html/video.html">Video</a></li>
                            <li><a href="/project/html/about.html">About</a></li>
                        </ul>
                        
                        <div id="sign-button">
                            <button id="sign-in-button" type="button" data-toggle="modal" data-target="#login-modal">Đăng nhập</button>
                            <button id="sign-up-button" type="button" data-toggle="modal" data-target="#register-modal">Đăng kí</button>
                        </div>
                    </nav>`

export default class MainMenu extends HTMLElement {
    constructor() {
        super()
        this.appendChild(main_menu.content.cloneNode(true))
    }
}

window.customElements.define('main-menu', MainMenu)