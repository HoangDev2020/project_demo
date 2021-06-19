import MainMenu from "../component/MainMenu/MainMenu.js"
import MyFooter from "../component/footer/footer.js"
import ProfileItem from "../component/profile-item/profile-item.js"
import CommentItem from "../component/comment/comment-item.js"
// import LikeItem from "../component/like_item/like_item.js"

let tmpUser = {
    displayName: "",
    photoURL: ""
}
let comment_arr = []
let tmpComment = {
    commentName: "",
    commentAvatar: "",
    commentValue: ""
}
export async function register(name, email, password) {
    tmpUser = {
        displayName: name,
        photoURL: 'https://firebasestorage.googleapis.com/v0/b/e-teams.appspot.com/o/users%2Fprofile_picture.png?alt=media&token=b81c9c34-010c-4249-aa74-3c36d7ca183b'
    }
    await auth.createUserWithEmailAndPassword(email, password)
    let currentUser = auth.currentUser
    await currentUser.updateProfile(tmpUser)

}

export async function login(email, password) {
    await auth.signInWithEmailAndPassword(email, password)
}

export function log_out() {
    auth.signOut()
    window.location.reload()
}


export function authStateChanged() {
    auth.onAuthStateChanged(user => {
        if (user != null) {
            $('#register-modal').modal("hide");
            $('#login-modal').modal("hide");
            document.getElementById("sign-button").innerHTML = '<profile-item></profile-item>'
            document.querySelector("#profile-pic").src = user.photoURL || tmpUser.photoURL
            document.querySelector("#profile-name").innerHTML = user.displayName || tmpUser.displayName
            document.querySelector("#comment_container").innerHTML = '<comment-item></comment-item>'
            comment_button.addEventListener('click', () => {
                tmpComment = {
                    commentName: user.displayName || tmpUser.displayName,
                    commentAvatar: user.photoURL || tmpUser.photoURL,
                    commentValue: comment_field.value
                }
                comment_arr.push(tmpComment)
                
                console.log(comment_arr);
                for (let i = 0; i < comment_arr.length; i++) {
                    const html = `
                                    <div class="comment_item">
                                        <div style="display: grid;">
                                            <img src="${comment_arr[i].commentAvatar}" alt="" id="comment_pic">
                                            <h4 id="comment_name" style="margin-bottom: 130px;">${comment_arr[i].commentName}</h4>
                                        </div>

                                        <div id="comment_content">
                                            <p>${comment_arr[i].commentValue}</P>
                                        </div>
                                    </div>
                                    `
                    comment_container.insertAdjacentHTML('beforeend', html)
                }
            })
        } else {
            console.log('logged out');
        }
    })
}


