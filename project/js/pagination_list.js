var pageList = new Array()
var currentPage = 1
var numberPerPage = 9
var numberOfPages = 0

let infor_container = document.getElementById("infor_container") 



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

function loadList() {
    var begin = ((currentPage - 1) * numberPerPage)
    var end = begin + numberPerPage

    pageList = data.slice(begin, end)
    drawList()
    check()
}
function drawList() {
    document.getElementById("infor_container").innerHTML = ""
    document.getElementById("index_of_page").textContent = currentPage
    for(let i = 0; i < pageList.length; i++) {
        let html = `<div class="items">
                        <img src="${pageList[i].img}" alt="">
                        <h2>${pageList[i].name}</h2>
                    </div>`
        infor_container.insertAdjacentHTML("beforeend", html)
    }
    document.getElementById("infor_container").innerHTML += infor_container   
    
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