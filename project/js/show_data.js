import {authStateChanged } from "../js/main.js"

authStateChanged()

var pageList = new Array()
var search_page_list = new Array()
var search_data = new Array()
var currentPage = 1
var numberPerPage = 9
var numberOfPages = 0
let first_page = document.querySelector("#first")
let next_page = document.querySelector("#next")
let previous_page = document.querySelector("#previous")
let last_page = document.querySelector("#last")
let search_button = document.querySelector("#search-button")
let infor_container = document.getElementById("infor_container") 


// first, divide image into pages
function makeList() {
    numberOfPages = getNumberOfPages()
}

function getNumberOfPages() {
    return Math.ceil(data.length / numberPerPage)
}

function nextPage() {
    currentPage += 1
    loadList()
}

function previousPage() {
    currentPage -= 1
    loadList()
}

function firstPage() {
    currentPage = 1
    loadList()
}

function lastPage() {
    currentPage = numberOfPages
    loadList()
}


next_page.addEventListener('click', () => {
    nextPage()
})

previous_page.addEventListener('click', () => {
    previousPage()
})

first_page.addEventListener('click', () => {
    firstPage()
})

last_page.addEventListener('click', () => {
    lastPage()
})

search_button.addEventListener('click', () => {
    search()
    
})

function loadList() { // load the page
    var begin = ((currentPage - 1) * numberPerPage)
    var end = begin + numberPerPage

    pageList = data.slice(begin, end)
    drawList()
    check()
}

function search() {
    var begin = ((currentPage - 1) * numberPerPage)
    var end = begin + numberPerPage
    let search_bar = document.getElementById("search-bar")
    let keyWord = search_bar.value
    for(let i = 0; i < data.length; i++) {
        if(data[i].name.toLowerCase().includes(keyWord.toLowerCase())) {
            search_data.push(data[i])
            search_page_list = search_data.slice(begin, end)
        }
        else if(data[i].inCountry.toLowerCase().includes(keyWord.toLowerCase())) {
            search_data.push(data[i])
            search_page_list = search_data.slice(begin, end)
        }
        
    }
    document.getElementById("infor_container").innerHTML = ""
    document.getElementById("index_of_page").textContent = "Trang:" + currentPage
    for(let i = 0; i < search_page_list.length; i++) {
        let html = `<div class="items">
                        <img src="${search_page_list[i].img}" alt="">
                        <h2>${search_page_list[i].name}</h2>
                    </div>`
        infor_container.insertAdjacentHTML("beforeend", html)
    }
    
    let items = document.getElementsByClassName("items")   
    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            document.getElementsByClassName("search-container")[0].innerHTML = ""
            document.getElementById("index_of_page").innerHTML = ""
            document.getElementById("change_page").innerHTML = ""
            document.getElementById("infor_container").innerHTML = ""
            let htmlEle = `<div id="information">
                                <img src="${search_page_list[i].img}" >
                                <h1>Tên: ${search_page_list[i].name}</h1>
                                <h2>Họ: ${search_page_list[i].surname}</h2>
                                <h4>Đặc điểm nhận dạng:</h4><p>${search_page_list[i].characteristics}</p>
                                <h4>Sinh học - Sinh thái:</h4> <p>${search_page_list.ecological}</p>
                                <h4>Phân bố:</h4><p>${search_page_list[i].inCountry}</p>
                                <h4>Giá trị:</h4><p>${search_page_list[i].value}</p>
                                <h4>Tình trạng:</h4><p>${search_page_list[i].status}</p>
                                <h4>Biện pháp bảo vệ:</h4><p>${search_page_list[i].protect}</p>
                            </div>`
            infor_container.insertAdjacentHTML("beforeend", htmlEle)   
        })
    }
}

function drawList() { // --> show the pages when they divided
    document.getElementById("infor_container").innerHTML = ""
    document.getElementById("index_of_page").textContent = "Trang:" + currentPage
    for(let i = 0; i < pageList.length; i++) {
        let html = `<div class="items">
                        <img src="${pageList[i].img}" alt="">
                        <h2>${pageList[i].name}</h2>
                    </div>`
        infor_container.insertAdjacentHTML("beforeend", html)
    }
    
    let items = document.getElementsByClassName("items")   
    for(let i = 0; i < items.length; i++) {
        items[i].addEventListener('click', () => {
            document.getElementsByClassName("search-container")[0].innerHTML = ""
            document.getElementById("index_of_page").innerHTML = ""
            document.getElementById("change_page").innerHTML = ""
            document.getElementById("infor_container").innerHTML = ""
            document.getElementsByTagName("title")[0].textContent = pageList[i].name
            let htmlEle = `<div id="information">
                                <img src="${pageList[i].img}" >
                                <h1>Tên: ${pageList[i].name}</h1>
                                <h2>Họ: ${pageList[i].surname}</h2>
                                <h4>Đặc điểm nhận dạng:</h4><p>${pageList[i].characteristics}</p>
                                <h4>Sinh học - Sinh thái:</h4> <p>${pageList[i].ecological}</p>
                                <h4>Phân bố:</h4><p>${pageList[i].inCountry}</p>
                                <h4>Giá trị:</h4><p>${pageList[i].value}</p>
                                <h4>Tình trạng:</h4><p>${pageList[i].status}</p>
                                <h4>Biện pháp bảo vệ:</h4><p>${pageList[i].protect}</p>
                            </div>`
            infor_container.insertAdjacentHTML("beforeend", htmlEle) 
            let comment_container = document.querySelector("#comment_container")
            comment_container.style.display = "block"  
        })
    }
    
}
function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

function load() {
    makeList();
    loadList();
}


window.onload = load