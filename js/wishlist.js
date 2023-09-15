const listFavorite = JSON.parse(localStorage.getItem('listFavorite'))

rederWishlist()
renderProductsWishList(listFavorite, '.table-body')

function renderProductsWishList(listFavorite, intoClass) {
    items = ''
    for(item of listFavorite) {
        items += `
        <tr data-id="${item.id}" class="wishlist-item-product">
            <td class="product-remove">
            <div class="btn-delete" onclick="deleteProduct(${item.id})">
                <i class="fa-solid fa-xmark"></i>
            </div>
                
            </td>
            <td class="product-thumbnail">
                <a data-id="${item.id}" href="./product.html" class="preview-product d-flex">
                    <img src="${item.img}" alt="Ảnh sản phẩm" width="220px" height="220px">
                </a>
            </td>
            <td class="product-name">
                <a data-id="${item.id}" href="./product.html" class="preview-product">${item.name}</a>
            </td>
            <td class="product-price">
                <del class="price"></del>
                <span class="discount">${item.price}$</span>
            </td>
            <td class="product-stock-status">
                <span>In Stock</span>
            </td>
            <td class="product-add-to-cart">
                <div class="add-to-cart">
                    <span onclick="addToCart(${item.id})" data-id='${item.id}' class='add-to-cart'>Add to cart</span>
                </div>
            </td>
        </tr>
        `
    }
    document.querySelector(intoClass).innerHTML = items;
}
function rederWishlist() {
    document.querySelector('.count-favorite').textContent = listFavorite.length
}

function deleteProduct(id) {
    var list = JSON.parse(localStorage.getItem('listFavorite'))   
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            list.splice(i, 1)
        }
    }
    localStorage.setItem("listFavorite", JSON.stringify(list))
    var list = JSON.parse(localStorage.getItem('listFavorite'))
    renderProductsWishList(list, '.table-body')
}


function addToCart(id) {
    var user = JSON.parse(localStorage.getItem('userName'))
    var pass = JSON.parse(localStorage.getItem('pass'))
    let list = JSON.parse(localStorage.getItem("listProductInCart"))     
  
    if (user === '') {
        alert("Bạn chưa đăng nhập. Hãy đăng nhập để tiến hành mua hàng")
    } else {
        
        const item = products.find((val) => val.id == id)
        const idx = list.findIndex((val) => val.id === item.id)  
        if (idx === -1) { 
            list.push({...item, quantity: 1})
        } else {
            list[idx].quantity += 1
        }
        renderCart(list)
        localStorage.setItem('listProductInCart', JSON.stringify(list))

    }
}


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