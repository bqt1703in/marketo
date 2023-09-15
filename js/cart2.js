var listProductInCart = JSON.parse(localStorage.getItem('listProductInCart'))
var total = 0
renderCart(listProductInCart)

function renderCart(list) {
    var li = ''
    for (let i = 0; i < list.length; i++) {
        var temp = list[i].price * list[i].quantity
        console.log(temp)
        total += temp
        li += `
        <tr class="cart-item-product" data-id="2">
            <td class="product-remove">
                <div class='btn-delete' onclick='deleteProduct(${list[i].id})'>
                    <i  class="fa-solid fa-xmark icon-delete"></i>
                </div>
            </td>
            <td class="product-thumbnail">
                <a data-id="${list[i].id}" href="./product.html" class="preview-product d-flex flex-center">
                    <img src="${list[i].img}" alt="Ảnh sản phẩm" width="100px" height="100px">
                </a>
            </td>
            <td class="product-name">
                <a data-id="${list[i].id}" href="./product.html" class="preview-product">${list[i].name}</a>
            </td>
            <td class="product-price">
                <span class="discount">$${list[i].price}</span>
            </td>
            <td class="product-quantity">
                <div class="quantity-content d-flex-inline">
                    <button onclick="btnDecrease(${list[i].id})" class="decrease decrease-${list[i].id}">-</button>
                    <input class="inp-quantity inp-quantity-${list[i].id}" id='${list[i].id}' value="${list[i].quantity}">
                    <button onclick="btnIncrease(${list[i].id})" class="increase increase-${list[i].id}">+</button>
                </div>
            </td>
            <td class="product-subtotal">
                <span class='total-products total-products-${list[i].id}'}'>$${temp}</span>
            </td>
        </tr>
        `
    }
    document.querySelector('.price1').textContent = total + '$'
    document.querySelector('.price2').textContent = total + '$'
    document.querySelector('.table-cart-body').innerHTML = li
}


function btnDecrease(id) {
    let idk = '.inp-quantity-' + id 
    let inputQuantity = document.querySelector(idk).value
    if (inputQuantity <= 1) {
        return;
    } else {
        inputQuantity--;
        document.querySelector(idk).value = inputQuantity;
        var listProductInCart = JSON.parse(localStorage.getItem('listProductInCart')) 
        let kk = '.total-products-' + id    
        total -= price(id, listProductInCart)
        document.querySelector(kk).textContent = '$' + inputQuantity * price(id, listProductInCart) 
        console.log(total)
        // document.querySelector('price').textContent = total + ''

    }
    
}
const btnCheckout = document.querySelector('.checkout')
btnCheckout.addEventListener('click', function(e) {
    e.preventDefault()
    window.location.href = 'checkout.html'
})
const btn_Update = document.querySelector('.btn-update')
btn_Update.addEventListener('click', function(e) {
    document.querySelector('.price1').textContent = total + '$'
    document.querySelector('.price2').textContent = total + '$'
    
})
function btnIncrease(id) {
    let idk = '.inp-quantity-' + id 
    let inputQuantity = document.querySelector(idk).value
    inputQuantity++;
    document.querySelector(idk).value = inputQuantity;
   
    var listProductInCart = JSON.parse(localStorage.getItem('listProductInCart')) 
    let kk = '.total-products-' + id
    total += price(id, listProductInCart)
    document.querySelector(kk).textContent = '$' + inputQuantity * price(id, listProductInCart) + ''
    console.log(total)
    // document.querySelector('price').textContent = total + ''

}
function price(id, list) {
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === id) {
            return list[i].price
        }
    }
}
// btnDecrease.addEventListener('click', function(e) {
//     if (inputQuantity <= 1) {
//         return;
//     } else {
//         e.preventDefault();
//         inputQuantity--;
//         console.log(inputQuantity)
//         document.querySelector('.inp-quantity').value = inputQuantity;
//         console.log(priceCurent)
//         console.log('priceCurent')
//         console.log(quantityCurent)
//         document.querySelector('.total-products').innerHTML = inputQuantity * (priceCurent / quantityCurent) + '' 

//     }
    
// })

// btnIncrease.addEventListener('click', function(e) {
//     e.preventDefault();
//     inputQuantity++;
//     console.log(inputQuantity)
//     document.querySelector('.inp-quantity').value = inputQuantity;

// })

function deleteProduct(id) {
   
    var listProductInCart = JSON.parse(localStorage.getItem('listProductInCart'))
    for (let i = 0; i < listProductInCart.length; i++) {
        if (listProductInCart[i].id === id) {
            listProductInCart.splice(i, 1)

        }
    }
    localStorage.setItem('listProductInCart', JSON.stringify(listProductInCart))
    var listProductInCart = JSON.parse(localStorage.getItem('listProductInCart'))
    renderCart(listProductInCart)
}

c