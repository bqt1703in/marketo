const btn_AllCategory = document.querySelector('.item-all-categories')
btn_AllCategory.addEventListener("click", function(e) {
    e.preventDefault();
    fadeToggle('.list-item-categories')  
})

const btn_ddCate = document.querySelector('.dropdown-category')
btn_ddCate.addEventListener('click', function(e) {
    e.preventDefault();
    fadeToggle('.list-item-category')
    
})
const element = document.querySelectorAll('.list-item-category .item')
element.forEach(function(li, index) {
    li.addEventListener('click', function(e) {
        e.preventDefault()
        console.log(li.textContent)
        localStorage.setItem('key', JSON.stringify(li.textContent))
        document.querySelector('.dropdown-category .category .content').textContent = li.textContent
        localStorage.setItem('inpSearch', JSON.stringify(li.textContent))

    })
})

function show(selector) {
    document.querySelector(selector).style.display = 'block'  
}
function hide(selector) {
    document.querySelector(selector).style.display = 'none' 
}
function fadeToggle(selector) {
    if (document.querySelector(selector).style.display == 'block') {
        hide(selector)
    } else if (document.querySelector(selector).style.display == 'none') {
        show(selector)
    } else if ( document.querySelector(selector).style.display == '') {
        show(selector)
    }
}

const btnCartShopping = document.querySelector(".fa-bag-shopping")
btnCartShopping.addEventListener('click', function(e) {
    show('.detail-cart')
})

const btnCloseCart = document.querySelector('.btn-close')
btnCloseCart.addEventListener('click', function() {
    hide('.detail-cart')
})

var userName = JSON.parse(localStorage.getItem('userName'))
document.querySelector('a.name-user').innerText = userName
