const footer = document.createElement('template')
footer.innerHTML = `<footer>
                        <div class="footer-container">
                            <div class="row">
                                <div class="col-sm-4">
                                    <h4>Theo dõi</h4><p>(Nhấn đường link bên dưới)</p>
                                    <p><a href="https://www.facebook.com/profile.php?id=100029449509736">Facebook</a></p>
                                </div>
                                <div class="col-sm-4">
                                    <h4>Trợ giúp</h4>
                                    <p>SĐT: 0963134322</p>
                                    <p>Email: poho1234569@gmail.com</p>
                                </div>
                                <div class="col-sm-4">
                                    <h4>Về trang web</h4>
                                    <p>Trang còn rất nhiều thông tin bị lỗi và thiếu sót một số loài phải chỉnh sửa. Vui lòng liên hệ theo các phương thức ở bên để sửa lỗi và bổ sung</p>
                                    <p>Mong sau khi vào trang web mọi người sẽ ý thức hơn về việc bảo vệ thiên nhiên</p>
                                    <p>Xin cảm ơn!!!</p>
                                </div>
                            </div>
                        </div>
                    </footer>`

export default class MyFooter extends HTMLElement {
    constructor() {
        super()
        this.appendChild(footer.content.cloneNode(true))
    }
}

window.customElements.define("my-footer", MyFooter)