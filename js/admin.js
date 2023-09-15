var products = JSON.parse(localStorage.getItem('products'))
console.log(products)
var idCurent = products.length 
const btn_Create = document.querySelector('.create')
btn_Create.addEventListener('click', function(e) {  
    e.preventDefault()
    var products = JSON.parse(localStorage.getItem('products'))
    var idPr = document.querySelector('#id').textContent * 1
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === idPr) {
            console.log(products[i].id)
            console.log(idPr)
            products.splice(i, 1)
        }
    }
    var name_product = document.querySelector('#name').value
    var price_product = document.querySelector('#price').value
    var category = document.getElementsByName('categories');
    let len = category.length;
    let checkValue = '';
    let img = '/img/'
    for (let i = 0; i < len; i++){
        if (category.item(i).checked){
            checkValue = category.item(i).value;
            img += category.item(i).value + '/';
        }
    }
    
    var link_img = document.querySelector('#img').value
    img += link_img
    
    var check = 0;
    for (let i = 0; i < price_product.length; i++) {
        if (price_product.charCodeAt(i) >= 48 && price_product.charCodeAt(i) <= 57) {

        } else {
            check++;
        }
    }
    if (name_product === "") {
        console.log("name null")
        document.querySelector('.icon-name').style.opacity = '1'
        // console.log(ic)

    } else if (price_product === "" || check  != 0) {
        console.log("price null")
        document.querySelector('.icon-price').style.opacity = '1'

      
    } else if (checkValue === "") {
        console.log("cate null")
        document.querySelector('.icon-cate').style.opacity = '1'

       
    } else if (link_img === "") {
        console.log("link null")
        document.querySelector('.icon-img').style.opacity = '1'

        
    } else {
        var newProduct = {
            id: ++idCurent,
            name: name_product,
            img: img,
            price: price_product * 1.0,
            category: checkValue
        }
        products.unshift(newProduct)
        console.log(products)
        alert("Successfully")
        renderListProducts(products, ".table-body")
        localStorage.setItem('products', JSON.stringify(products))
        name_product = document.querySelector('#name').value = ''
        price_product = document.querySelector('#price').value = ''
        link_img = document.querySelector('#img').value = ''
        hide('section.create-new-product')
        
    }

})



var adminName = JSON.parse(localStorage.getItem('adminName'))
var listUser = JSON.parse(localStorage.getItem('listUser'))
for(let i = 0; i < listUser.length; i++) {
    if (listUser[i].loginName === adminName) {
       
        document.querySelector('.name-admin').innerText = listUser[i].name 
    }
}
renderListProducts(products, ".table-body")
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


function renderListProducts(products, intoClass) {
    let str = ''
    for (let pr of products) {
        str += `
        <tr data-id="${pr.id}" class="wishlist-item-product">              
            <td class="padding product-img">
                <a data-id="${pr.id}" href="./product.html" class="preview-product d-flex flex-center">
                    <img src="${pr.img}" alt="Ảnh sản phẩm">
                </a>
            </td>
            <td onclick="saveID(${pr.id})"class="padding product-name">
                <a data-id="${pr.id}" href="./product.html" class="preview-product">${pr.name}</a>
            </td>
            <td class="padding product-price">
                <del class="price"></del>
                <span class="discount">$${pr.price}</span>
            </td>
            <td class="padding product-quantity-stock">
                <span>In Stock</span>
            </td>
            <td class="padding product-category">
                <a href="#" class="add-to-cart" data-id="${pr.id}">
                    <span>${pr.category}</span>
                </a>
            </td>
            <td class="padding product-action">
                <button onclick='deleteProduct(${pr.id})' class="delete"><i class="fa-regular fa-trash-can"></i></button>
                <button onclick='editProduct(${pr.id})'class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            </td>
        </tr>
        `
    }
    document.querySelector(intoClass).innerHTML = str
}


function deleteProduct(id) {
    document.querySelector('.yes-no').style.display = 'flex'
    const yes = document.querySelector('.yes')
    const no = document.querySelector('.no')
    yes.addEventListener('click', function(e) {
        e.preventDefault()
        console.log('yes')
        var products = JSON.parse(localStorage.getItem('products'))
        console.log(products)
        for (let i = 0; i < products.length; i++) {
            if (products[i].id === id)
            products.splice(i, 1)
        }
        localStorage.setItem('products',JSON.stringify(products))
        var products = JSON.parse(localStorage.getItem('products'))
        renderListProducts(products, '.table-body')
    document.querySelector('.yes-no').style.display = 'none'

    }) 
   
    no.addEventListener('click', function(e) {
        e.preventDefault()
    document.querySelector('.yes-no').style.display = 'none'

        console.log('no')
    }) 
    
}
function editProduct(id) {
    show('section.create-new-product')
    var products = JSON.parse(localStorage.getItem('products'))
    let product = products.find((val) => val.id === id)
    var idPr = document.querySelector('#id').textContent = product.id;
    var name = document.querySelector('#name').value = product.name;
    var price = document.querySelector('#price').value = product.price;
    var img = document.querySelector('#img').value = product.img.split('/')[product.img.split('/').length - 1]
    var category = document.getElementsByName('categories');
    for (let i = 0; i < category.length; i++) {
        if (category[i].id === product.category) {
            category[i].checked = true
        }
        console.log(category[i].id)

    }

    // for (let i = 0; i < products.length; i++) {
    //     if (products[i].id === id)
    //     var name = document.querySelector('#name').value = products[i].name;
    //     var price = document.querySelector('#price').value = products[i].price;
    //     var check = document.getElementsByName('category').item.checked = products[i].category
    //     document.getElementsByName('category').item.checked = 'laptop'
    //     var category = document.getElementsByName('categories');
        
    //     for (let j = 0; j < category.length; j++) {
    //         if (category.item(j).value === products[i].category) {
    //             console.log(category.item(j).value)
    //             console.log(products[i].category)
    //             // category.item(j).checked = true;
              
    //         }
    //     }
    //     // for (let i = 0; i < len; i++){
    //     //     if (check.item(i).checked){
    //     //         checkValue = category.item(i).value;
    //     //     }
    //     // }
    //     // products.splice(i, 1)
    // }

} const thongke = document.querySelector('.item-statistical')  
thongke.addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('main.statistical').style.display = 'block'
    document.querySelector('.main').style.display = 'none'

    // document.querySelector()
})

const item_mana_product = document.querySelector('.item-manager-products')
item_mana_product.addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('main.statistical').style.display = 'none'
    document.querySelector('.main').style.display = 'block'


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

const btn_Show_Form = document.querySelector(".create-new-product .content")
btn_Show_Form.addEventListener('click', function(e) {
    fadeToggle("section.create-new-product")
})

function saveID(id) {
    localStorage.setItem('idProduct', JSON.stringify(id))
}
