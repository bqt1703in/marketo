

var products = JSON.parse(localStorage.getItem('products'))
var topThisWeek = JSON.parse(localStorage.getItem('topThisWeek'))
var listFavorite = JSON.parse(localStorage.getItem('listFavorite'))
renderProducts(products, 'women', '.womens-clothing-items');
renderProducts(products, 'laptop', '.mens-clothing-items');
renderProducts(products, 'mobile', '.mobiles-items');
renderTopThisWeek(topThisWeek, '.top-this-week')


var userName = JSON.parse(localStorage.getItem('userName'))
console.log(userName)
if (userName == '') {
    document.querySelector('.login').innerText = `Login`
} else {
    document.querySelector('.login').innerText = `Logout`
}

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

const btn_AddToCart = document.querySelectorAll('.favorite-and-add-to-card')
btn_AddToCart.forEach(function(button, index) {
   button.addEventListener('click', function(e) {
        var user = JSON.parse(localStorage.getItem('userName'))
        var pass = JSON.parse(localStorage.getItem('pass'))
        let list = JSON.parse(localStorage.getItem("listProductInCart"))     
        if (user === '') {
            alert("Bạn chưa đăng nhập. Hãy đăng nhập để tiến hành mua hàng")
        } else {
            e.preventDefault()
            var btnItem = e.target
            var product = btnItem.parentElement
            var product = product.parentElement
            var product = product.parentElement 
            var productId = product.dataset.id 
            const item = products.find((val) => val.id == productId)
            const idx = list.findIndex((val) => val.id === item.id)
            if (idx === -1) { 
                list.push({...item, quantity: 1})
            } else {
                list[idx].quantity += 1
            }
            renderCart(list)
            localStorage.setItem('listProductInCart', JSON.stringify(list))

        }
    })
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
const btn_Favorite = document.querySelectorAll('.icon-favorite')
btn_Favorite.forEach(function(i, index) {
    i.addEventListener('click', function(e) {
        let listFavorite = JSON.parse(localStorage.getItem('listFavorite'))
        e.preventDefault()
        var btnItem = e.target;
        var product = btnItem.parentElement;
        var product = product.parentElement
        var productId = product.dataset.id
        const item = products.find((val) => val.id == productId)
        const idx = listFavorite.findIndex((val) => val.id === item.id)
        if (idx === -1) { 
            listFavorite.push({...item, quantity: 1})
        } else {
            listFavorite[idx].quantity += 1
        }
        document.querySelector('.count-favorite').textContent = listFavorite.length
        localStorage.setItem('listFavorite', JSON.stringify(listFavorite))
       
    })
}) 
function addCart(id, img, name, price, quantity) {
    items = `
    <li data-id="${id}"class="item d-flex">
        <img src="${img}" alt="">
        <div class="content">
            <h3 class="item-name">${name}</h3>
            <div class="quantity">${quantity}x </div>                                          
            <div class="price">$${price}</div>
        </div>
        <button onclick='deleteProductInCart(${id})'class="btn-delete-product">
            <i class="fa-solid fa-xmark"></i>
        </button>
    </li>
    `
    return items;
}

function renderProductsFull(products, category, intoClass) {
    let newListProduct = products.filter((val, index) =>{
        return val.category === category;
    }, [])
    let items = '';
    for (let i = 0; i < newListProduct.length; i++) {
        items += `
            <a href="">
                <div class="cols">
                    <div data-id="${newListProduct[i].id}"class="item">
                        <img src="${newListProduct[i].img}" alt="">
                        <div class="content-item">
                            <h4 class="name-item">${newListProduct[i].name}</h4>
                            <span class="price">${newListProduct[i].price}$</span>
                            <i class="fa-regular fa-heart icon-favorite"></i>
                            <div class="favorite-and-add-to-card d-flex">
                                <button class='add-to-cart'>
                                    <i class="fa-solid fa-plus"></i>
                                    Add to cart
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </a>
        `
    }
    document.querySelector(intoClass).innerHTML = items;
}

function renderProducts(products, category, intoClass) {
    var newListProduct = products.filter((val, index) =>{
        return val.category === category;
    }, [])
    console.log(newListProduct)
    localStorage.setItem('listProductOfCate', JSON.stringify(newListProduct))
    let items = ''; 
    for (let i = 0; i < 8; i++) {
        console.log(newListProduct[i])
        items += `     
        <div onclick='saveID(${newListProduct[i].id})' class="cols">   
            <div data-id="${newListProduct[i].id}" class="item">
                <a href="product.html">
                    <img src="${newListProduct[i].img}" alt="">
                </a>
                <div class="content-item">
                    <h4 class="name-item">${newListProduct[i].name}</h4>
                    <span class="price">${newListProduct[i].price}$</span>
                    <i class="fa-regular fa-heart icon-favorite"></i>
                    <div class="favorite-and-add-to-card d-flex">
                        <button class='add-to-cart'>
                            <i class="fa-solid fa-plus"></i>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
        `
    }

    document.querySelector(intoClass).innerHTML = items;
}
function renderTopThisWeek(topThisWeek, intoClass) {
    var items = ''
    for (let i = 0; i < 12; i++) {
        var rating = ' <i class="fa-solid fa-star"></i>'.repeat(topThisWeek[i].rating)
        rating += '<i class="fa-regular fa-star"></i>'.repeat(5 - topThisWeek[i].rating)
        items += `
            <div onclick="saveID(${topThisWeek[i].id}) "data-id="${topThisWeek[i].id}"class="tab-item-product cols d-flex">
                <a class="d-flex" href="product.html">
                <img src="${topThisWeek[i].img}" alt="">
                <div class="content">
                    <div class="icon d-flex">
                        <div class="feedback d-flex">
                            ${rating}
                        </div>
                        <div class="favorite">
                            <i class="fa-regular fa-heart icon-favorite"></i>
                        </div>
        
                    </div>
                    <div class="product-name">
                        ${topThisWeek[i].name}
                    </div>
                    <span class="price">${topThisWeek[i].price}$</span>
                </div>

                </a>
            </div>
        `
    }
    document.querySelector(intoClass).innerHTML = items;
}

function saveID(id) {
    localStorage.setItem('idProduct', JSON.stringify(id))
}




function search_Cate(text) {
    document.querySelector('.search-category').style.display = 'block'
    let curentPage = 1; // trang bắt đầu khi mở 
    let perPage = 8; // số sp 1 trang
    var cate = []
    for(let i = 0; i < products.length; i++) {
        if (products[i].category === text) {
            cate.push(products[i])
        }
    }
    console.log(cate)  
    let totalPage = cate.length / perPage// tổng số page = số sp / số sp 1 trang 
    renderPageNumber(perPage, cate)
    let perProducts = []
    for (let i = 0; i < cate.length; i++) {
        perProducts = cate.slice(
            (curentPage - 1) * perPage, (curentPage - 1) * perPage + perPage,
        )
    }
    console.log(cate)
    localStorage.setItem('listProductOfCate', JSON.stringify(cate))
    console.log(perProducts)
    var items = ''
    for (let i = 0; i < perProducts.length; i++) {
        var rating = ' <i class="fa-solid fa-star"></i>'.repeat(perProducts[i].rating)
        rating += '<i class="fa-regular fa-star"></i>'.repeat(5 - perProducts[i].rating)
        items += `
            <div onclick="saveID(${perProducts[i].id}) "data-id="${perProducts[i].id}"class="tab-item-product cols d-flex">
                <a class="d-flex" href="product.html">
                <img src="${perProducts[i].img}" alt="">
                <div class="content">
                    <div class="icon d-flex">
                        <div class="feedback d-flex">
                            ${rating}
                        </div>
                        <div class="favorite">
                            <i class="fa-regular fa-heart icon-favorite"></i>
                        </div>
        
                    </div>
                    <div class="product-name">
                        ${perProducts[i].name}
                    </div>
                    <span class="price">${perProducts[i].price}$</span>
                </div>

                </a>
            </div>
        `
    }
    document.querySelector('.search-category .container .row').innerHTML = items   
    localStorage.setItem('searchCate', JSON.stringify(text))
}

function pageNumber(num) {
    curentPage = num
    let perPage = 8;
    var cate = JSON.parse(localStorage.getItem('listProductOfCate'))
    
    console.log(cate)  
    let totalPage = cate.length / perPage// tổng số page = số sp / số sp 1 trang 
    renderPageNumber(perPage, cate)
    let perProducts = []
    for (let i = 0; i < cate.length; i++) {
        perProducts = cate.slice(
            (curentPage - 1) * perPage, (curentPage - 1) * perPage + perPage,
        )
    }
    console.log(cate)
    console.log(perProducts)
    var items = ''
    for (let i = 0; i < perProducts.length; i++) {
        var rating = ' <i class="fa-solid fa-star"></i>'.repeat(perProducts[i].rating)
        rating += '<i class="fa-regular fa-star"></i>'.repeat(5 - perProducts[i].rating)
        items += `
            <div onclick="saveID(${perProducts[i].id}) "data-id="${perProducts[i].id}"class="tab-item-product cols d-flex">
                <a class="d-flex" href="product.html">
                <img src="${perProducts[i].img}" alt="">
                <div class="content">
                    <div class="icon d-flex">
                        <div class="feedback d-flex">
                            ${rating}
                        </div>
                        <div class="favorite">
                            <i class="fa-regular fa-heart icon-favorite"></i>
                        </div>
        
                    </div>
                    <div class="product-name">
                        ${perProducts[i].name}
                    </div>
                    <span class="price">${perProducts[i].price}$</span>
                </div>

                </a>
            </div>
        `
    }
    document.querySelector('.search-category .container .row').innerHTML = items   
}
function renderPageNumber(perPage, list) {
    console.log(perPage)
    console.log(list.length)
    let totalPage = list.length / perPage
    let html = ''
    for (let i = 0; i <= totalPage; i++) {
       html += `<span onclick="pageNumber(${i+1})"class='number-page'>${i+1}</span>`
    }
    console.log(perPage)
    console.log(list)
    console.log(totalPage)
    console.log(html)
    document.querySelector('.numberpage').innerHTML = html
}
function Cate() {
    var text = JSON.parse(localStorage.getItem('searchCate'))
    var list = []
    for(let i = 0; i < products.length; i++) {
        if (products[i].category === text) {
            list.push(products[i])
        }
    }
    return list;
}



