

document.querySelector('.title-bar').textContent = 'Search Result for ' + '"' 
                                                    + JSON.parse(localStorage.getItem('inpSearch')) + '"'
document.querySelector('.key').textContent = JSON.parse(localStorage.getItem('inpSearch'))
var products = JSON.parse(localStorage.getItem('products'))
const category = document.querySelector('.category').innerText
var key = JSON.parse(localStorage.getItem('inpSearch'))
var cate = JSON.parse(localStorage.getItem('inpCate'))
var list = []

if (key === '') {
    switch(cate) {
        case 'all':
            list = products;
            break;
        case 'mobile':
            list = products.filter((val) => val.category === 'mobile');
            break;
        case 'drone':
            list = products.filter((val) => val.category === 'drone');
            break;
        case 'men':
            list = products.filter((val) => val.category === 'men');
            break;
        case 'women':
            list = products.filter((val) => val.category === 'women');
            break;
        case 'headphone':
            list = products.filter((val) => val.category === 'headphone');
            break;
        case 'laptop':
            list = products.filter((val) => val.category === 'laptop');
            break;
        case 'watches':
            list = products.filter((val) => val.category === 'watches');
            break;
        case 'camera':
            list = products.filter((val) => val.category === 'camera');
            break;
    }
} else {
    for (let i = 0; i < products.length ;i++) {         
        var temp = products[i].name.toLowerCase()  
        if (temp.indexOf(key) >= 0) {
            console.log(products[i].name) 
            list.push(products[i])
        }          
    }

}
renderProducts(list, '.list-result')

function renderProducts(list, intoClass) {
    let curentPage = 1;
    let perPage = 12;
    let totalPage = list.length / perPage
    renderPageNumber(perPage, list)
    let perProducts = []
    for (let i = 0; i < list.length; i++) {
        perProducts = list.slice(
            (curentPage - 1) * perPage, (curentPage - 1) * perPage + perPage,
        )
    }

    console.log(perProducts)
    li = ''
    for (let i = 0; i < perProducts.length; i++) {
        var temp = ' <i class="fa-solid fa-star"></i>'.repeat(perProducts[i].rating)
        temp += '<i class="fa-regular fa-star"></i>'.repeat(5 - perProducts[i].rating)
        li += `
        <div data-id=${perProducts[i].id}  onclick="saveID(${perProducts[i].id})"class="cols">
            <a href="product.html">
                <div data-id=${perProducts[i].id} class="item d-flex">
                    <img src="${perProducts[i].img}" alt="" width="125px" height="125px">
                    <div class="content">
                        <div class="rating d-flex">
                            <div>
                                ${temp}
                            </div>
                            <div>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>

                        <h3 data-id=${perProducts[i].id} class="name">${perProducts[i].name}</h3>
                        <div data-id=${perProducts[i].id} class="price">$${perProducts[i].price}</div>
            
                    </div>

                </div>
            </a>
        </div>
        `
    }
    document.querySelector(intoClass).innerHTML = li
}

function pageNumber(num) {
    curentPage = num
    let perPage = 12;
    var cate = list
    let totalPage = cate.length / perPage// tổng số page = số sp / số sp 1 trang 
    renderPageNumber(perPage, cate)
    let perProducts = []
    for (let i = 0; i < cate.length; i++) {
        perProducts = cate.slice(
            (curentPage - 1) * perPage, (curentPage - 1) * perPage + perPage,
        )
    }
    var li = ``
    for (let i = 0; i < perProducts.length; i++) {
        var temp = ' <i class="fa-solid fa-star"></i>'.repeat(perProducts[i].rating)
        temp += '<i class="fa-regular fa-star"></i>'.repeat(5 - perProducts[i].rating)
        li += `
        <div data-id=${perProducts[i].id}  onclick="saveID(${perProducts[i].id})"class="cols">
            <a href="product.html">
                <div data-id=${perProducts[i].id} class="item d-flex">
                    <img src="${perProducts[i].img}" alt="" width="125px" height="125px">
                    <div class="content">
                        <div class="rating d-flex">
                            <div>
                                ${temp}
                            </div>
                            <div>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>

                        <h3 data-id=${perProducts[i].id} class="name">${perProducts[i].name}</h3>
                        <div data-id=${perProducts[i].id} class="price">$${perProducts[i].price}</div>
            
                    </div>

                </div>
            </a>
        </div>
        `
    }
    document.querySelector('.list-result').innerHTML = li
   
   
}
function renderPageNumber(perPage, list) {
    console.log(perPage)
    console.log(list.length)
    let totalPage = list.length / perPage
    let html = ''
    for (let i = 0; i <= totalPage; i++) {
       html += `<span onclick="pageNumber(${i+1})"class='number-page'>${i+1}</span>`
    }
    
    document.querySelector('.numberpage').innerHTML = html
}

function saveID(id) {
    localStorage.setItem('idProduct', JSON.stringify(id))
}


var list_condition = JSON.parse(localStorage.getItem("listProductInput"))
var newList = list_condition
const btnSearchByPrice = document.querySelector('.btnsearch')
btnSearchByPrice.addEventListener('click', function(e) {
    e.preventDefault()
   
    var from = document.querySelector('#from').value
    var to = document.querySelector('#to').value
    
    if (from === '' && to === '') {
        alert('Bạn phải nhập khoảng giá trị cần tìm')
    } else if (from === '' ) {
        to *= 1
        newList = list_condition.filter((val) => val.price <= to)
        renderProducts(newList, '.list-result')
    } else if (to === '') {
        from *= 1
        newList = list_condition.filter((val) => val.price >= from)
        renderProducts(newList, '.list-result')
    } else {
        newList = list_condition.filter((val) => val.price >= from && val.price <= to)
        renderProducts(newList, '.list-result')
    }

    if (newList.length <= 0) {
        document.querySelector('.list-result').innerHTML = '<div class="empty">Sorry, the product you just searched for is not available, please try again.</div>'
    }
    

    

})

const btnSortByPrice = document.querySelector('.btnsort')
btnSortByPrice.addEventListener('click', function(e) {
    e.preventDefault()
    if (newList.length === 0) {
        document.querySelector('.list-result').innerHTML = '<div class="empty">Sorry, the product you just searched for is not available, please try again.</div>'
        return;
    }
    let list = []
    let lowToHight = document.getElementById('low-to-hight')
    let hightToLow = document.getElementById('hight-to-low')
    if (lowToHight.checked) {
        list = newList.sort(compareValues('price'));
        renderProducts(list, '.list-result')
    } else if (hightToLow.checked) {
        list = newList.sort(compareValues('price', 'desc'));
        renderProducts(list, '.list-result')
    } else {
        alert('Hãy lựa chọn hình thức sort')
    }

})
function compareValues(key, order = 'asc') {
    return function(a, b) {
        if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
        }

        const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
        comparison = 1;
        } else if (varA < varB) {
        comparison = -1;
        }
        return (
        (order == 'desc') ? (comparison * -1) : comparison
        );
    };
}

// kk.sort(compareValues('price'));