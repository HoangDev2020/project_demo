import { log_out } from "/project/js/main.js"

const profile_item = document.createElement("template")
profile_item.innerHTML = `<div id="profile_item">
                            <h3 id="profile-name"></h3>
                            <img src="" id="profile-pic">
                            <button id="log-out-button">Đăng xuất</button>
                          </div>`

export default class ProfileItem extends HTMLElement {
    constructor() {
        super()
        this.appendChild(profile_item.content.cloneNode(true))

        const $logout = document.querySelector("#log-out-button")
        $logout.addEventListener('click', (e) => {
            e.preventDefault()
            log_out()
        })
    }
}

window.customElements.define('profile-item', ProfileItem)
