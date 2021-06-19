// const like_item = document.createElement("template")
// like_item.innerHTML = `
                            
                            
//                         `

// let count_arr = [
//     {
//         count_like: 0
//     },
//     {
//         count_like: 0
//     },
//     {
//         count_like: 0
//     },
//     {
//         count_like: 0
//     }
// ]

// for(let i = 0; i < count_arr.length; i++) {
    
// }
// export default class LikeItem extends HTMLElement {
//     constructor() {
//         super()

//         this.appendChild(like_item.content.cloneNode(true))

//         let like_button = this.getElementsByClassName("like_button")
//         let dislike_button = this.getElementsByClassName("dislike_button")
//         let time_of_like = this.getElementsByClassName("time_of_like")
//         let time_of_dislike = this.getElementsByClassName("time_of_dislike")
//         console.log(like_button.length);
//         for (let i = 0; i < like_button.length; i++) {
//             like_button[i].addEventListener('click', () => {
//                 console.log(i);
//             })
            
            
//             time_of_like[i].textContent = count_arr[i].count_like
//         }
//     }
// }

// window.customElements.define("like-item", LikeItem)