var log = JSON.parse(localStorage.getItem("userName"))
if (log != '') {
    document.querySelector('.login').innerText = 'Log out'
}
var listProductInCart = JSON.parse(localStorage.getItem('listProductInCart'))
renderCart(listProductInCart);
function renderCart(listProductInCart) {
    document.querySelector('.count-cart').textContent = listProductInCart.length
    var li = ''
    var total = 0;
    for (let i = 0; i < listProductInCart.length; i++) {
        temp = addCart(
                        listProductInCart[i].id,
                        listProductInCart[i].img, 
                        listProductInCart[i].name, 
                        listProductInCart[i].price,
                        listProductInCart[i].quantity)
        li += temp
        total += listProductInCart[i].quantity * listProductInCart[i].price
      
    }
    document.querySelector('.list-products').innerHTML = li
    document.querySelector(".total").textContent = `${total} .00$`
}
function addCart(id, img, name, price, quantity) {
    items = `
    <li data-id="${id}" class="item d-flex">
        <img src="${img}" alt="">
        <div class="content">
            <h3 class="item-name">${name}</h3>
            <div class="quantity">${quantity}x </div>                                          
            <div class="price">${price}</div>
        </div>
        <button onclick='deleteProductInCart(${id})'class="btn-delete-product">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </li>
    `
    return items;
}

var products = JSON.parse(localStorage.getItem('products'))

function deleteProductInCart(id) {
    let list = JSON.parse(localStorage.getItem("listProductInCart"))
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list.splice(i, 1)
        }
       
    }
  
    localStorage.setItem('listProductInCart', JSON.stringify(list))
    renderCart(list)
}

const btn_Login = document.querySelector('.login')
btn_Login.addEventListener('click', function(e) {
    e.preventDefault()
    localStorage.setItem('userName', JSON.stringify(''))
    window.location.href = 'login.html'
    // window.open('login.html')
})
