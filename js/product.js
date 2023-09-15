var idProduct = JSON.parse(localStorage.getItem('idProduct'))
var products = JSON.parse(localStorage.getItem('products'))

renderProduct(products, '.section-preview-product-content')
function renderProduct(products, intoClass) {
    const product = products.find((val) => val.id == idProduct)
    let name = product.name
    console.log(name)
    document.querySelector('.title-bar1').textContent = name
    const k = document.querySelector('li.item-name').textContent = name
   
    var temp = ' <i class="fa-solid fa-star"></i>'.repeat(product.rating)
    temp += '<i class="fa-regular fa-star"></i>'.repeat(5 - product.rating)
    var items = `
        <div class="item-product d-flex row">
            <div class="product-img">
                <div class="d-flex">
                    <div class="img-item">
                        <img src="${product.img}" alt="Ảnh sản phẩm" width="500px" height="500px">
                    </div>
                    <div class="product-gallery-img">
                        <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a>
                    </div>
                    <span class="product-on-sale"></span>
                </div>
            </div>
            <div class="product-desc">
                <div class="product-name">
                    <span>${product.name}</span>
                </div>
                <span class="product-category">Categories:
                    <a href="#" class="product-category-item">${product.category}</a>, 
                </span>
                <div class="rate-star">
                    ${temp}
                    <a href="#">(1 customer review)</a></div>
                <p class="product-detail-short-desc">
                    DPellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                    placerat eleifend leo.
                </p>
                <div class="product-price">
                    <del class="price">$${product.price}</del>
                    <span class="discount">$${product.price}</span>
                </div>
                <div class="product-quantity-add d-flex">
                    <div class="product-quantity">
                        <div class="quantity-content d-flex">
                            <button class="decrease"><i class="fa-solid fa-minus"></i></button>
                            <input class="inp-quantity" value="1" min="1">

                            <button class="increase"><i class="fa-solid fa-plus"></i></button>
                        </div>
                    </div>
                    <div data-id="${product.id}" class="product-add-to-cart">
                        <div class='add-to-cart'>
                            Add to cart           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    document.querySelector(intoClass).innerHTML = items;
}
var inputQuantity = document.querySelector('.inp-quantity').value

const btnIncrease = document.querySelector('.increase')

const btnDecrease = document.querySelector('.decrease')

btnDecrease.addEventListener('click', function(e) {
    if (inputQuantity <= 1) {
        return;
    } else {
        e.preventDefault();
        inputQuantity--;
        console.log(inputQuantity)
        document.querySelector('.inp-quantity').value = inputQuantity;

    }

})
btnIncrease.addEventListener('click', function(e) {
    e.preventDefault();
    inputQuantity++;
    console.log(inputQuantity)
    document.querySelector('.inp-quantity').value = inputQuantity;

})


const btn_AddToCart = document.querySelector('.product-add-to-cart')
btn_AddToCart.addEventListener('click', function(e) {
    var user = JSON.parse(localStorage.getItem('userName'))
    var pass = JSON.parse(localStorage.getItem('pass'))
    let list = JSON.parse(localStorage.getItem("listProductInCart"))     
    e.preventDefault()
    if (user === '') {
        alert("Bạn chưa đăng nhập. Hãy đăng nhập để tiến hành mua hàng")
    } else {
        var btnItem = e.target
        var productId = btnItem.parentElement
        var productId = productId.dataset.id
        console.log(productId)
        const item = products.find((val) => val.id == productId)
        const idx = list.findIndex((val) => val.id === item.id)
        const quantity = document.querySelector('.inp-quantity').value * 1
        
        if (idx === -1) { 
            list.push({...item, quantity: quantity})
        } else {
            list[idx].quantity += 1
        }
        renderCart(list)
        localStorage.setItem('listProductInCart', JSON.stringify(list))

    }
    
})

function renderCart(list) {
    document.querySelector('.count-cart').textContent = list.length
    var li = ''
    var total = 0
    for (let i = 0; i < list.length; i++) {
        temp = addCart(
                        list[i].id,
                        list[i].img, 
                        list[i].name, 
                        list[i].price,
                        list[i].quantity
                    )
        li += temp
        total += list[i].quantity * list[i].price
    }
    
    document.querySelector('.list-products').innerHTML = li
    document.querySelector(".total").textContent = `${total}.00$`
}

function addCart(id, img, name, price, quantity) {
    items = `
    <li data-id="${id}"class="item d-flex">
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


