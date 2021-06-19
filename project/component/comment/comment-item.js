

const comment_item = document.createElement("template")
comment_item.innerHTML = `  <h2>Bình luận</h2>                    
                            <div id="comment_box">
                                <input type="text" placeholder="Viết bình luận" id="comment_field">
                                <div id="btn">
                                    <button id="comment_button">Đăng</button>
                                    <button id="cancel_button" style="height: 40px; display: none; border: none; font-weight: bold; color: black; background-color: white; margin-top: 5px; margin-left: 3px">Hủy</button>
                                </div>
                            </div>`


export default class CommentItem extends HTMLElement {
    constructor() {
        super()
        this.appendChild(comment_item.content.cloneNode(true))
        
        let comment_field = this.querySelector("#comment_field")
        let backUp = comment_field.getAttribute('placeholder')
        let comment_button = this.querySelector("#comment_button")
        let cancel_button = this.querySelector("#cancel_button")
        comment_field.onfocus = function () {
            this.setAttribute('placeholder', '')
            this.style.borderColor = '#333'
            comment_button.style.display = 'block'
            cancel_button.style.display = 'block'
        }

        comment_field.onblur = function () {
            this.setAttribute('placeholder', backUp)
            this.style.borderColor = '#aaa'
            
        }
        
        cancel_button.onclick = function () {
            comment_button.style.display = 'none'
            cancel_button.style.display = 'none'
            comment_field.value = ''
        }
    }
}

window.customElements.define('comment-item', CommentItem)