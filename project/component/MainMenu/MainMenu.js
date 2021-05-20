const main_menu = document.createElement("template")
main_menu.innerHTML = `<nav>
                        <h2>V.R.C</h2>
                        <ul>
                            <li><a href="/project/index.html">Trang chủ</a></li>
                            <li><a href="#">Video</a></li>
    
                        </ul>
                        <div id="sign-button">
                            <button id="sign-in-button">Đăng nhập</button>
                            <button id="sign-up-button">Đăng kí</button>
                        </div>
                    </nav>`

export default class MainMenu extends HTMLElement {
    constructor() {
        super()
        this.appendChild(main_menu.content.cloneNode(true))
    }
}

window.customElements.define('main-menu', MainMenu)