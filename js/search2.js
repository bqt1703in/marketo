const btnSearch = document.querySelector('.btn-search')
btnSearch.addEventListener('click', function(e) {
    e.preventDefault();
    var  li = ''
    var inpSearch = document.getElementById('input-search').value.toLowerCase() 
    var inpCate = document.getElementById('content').innerText
    localStorage.setItem('inpSearch', JSON.stringify(inpSearch))
    var products = JSON.parse(localStorage.getItem('products'))
    const result = document.querySelector('#result-search').style.display = 'block'
    var newList = []
    if (inpSearch === '') {
        switch(inpCate) {
            case 'All categories': 
                newList = products
                localStorage.setItem('inpCate', JSON.stringify('all'))
                break;
            case 'Woman Clothing':
                newList = products.filter((val) => val.category === 'women')
                localStorage.setItem('inpCate', JSON.stringify('women'))
                break;
            case 'Man Clothing':
                newList = products.filter((val) => val.category === 'men')
                localStorage.setItem('inpCate', JSON.stringify("men"))
                break;
            case 'Mobile':
                newList = products.filter((val) => val.category === 'mobile')
                localStorage.setItem('inpCate', JSON.stringify("mobile"))
                break;
            case 'Drone':
                newList = products.filter((val) => val.category === 'drone')
                localStorage.setItem('inpCate', JSON.stringify("drone"))
                break;
            case 'Camera':
                newList = products.filter((val) => val.category === 'camera')
                localStorage.setItem('inpCate', JSON.stringify("camera"))
                break;         
            case 'Watches':
                newList = products.filter((val) => val.category === 'watches')
                localStorage.setItem('inpCate', JSON.stringify("watches"))
                break;
            case 'Headphones':
                newList = products.filter((val) => val.category === 'headphone')
                localStorage.setItem('inpCate', JSON.stringify("headphone"))
                break;

        }

    } else {
        for (let i = 0; i < products.length ;i++) {   
            var temp = products[i].name.toLowerCase()   
            if (temp.indexOf(inpSearch) >= 0) {
               
                newList.push(products[i])
            }          
        }
    }
    localStorage.setItem('listProductInput', JSON.stringify(newList))
    console.log(newList.length)
   
    if (newList.length === 0) {
        li += `
            <div>Empty</div>
        `
    } else if (newList.length < 6) {         
        for (let i = 0; i < newList.length; i++) {
            li += `
                <li onclick='saveID(${newList[i].id})' class="item">
                    <a class="d-flex" href="product.html">
                        <img src="${newList[i].img}" alt="" width="75px" height="75px">
                        <div class="content">
                            <div class="name">${newList[i].name}</div>
                            <div class="price">$${newList[i].price}</div>
                        </div>
        
                    </a>
                </li>
                `
        }   
        document.querySelector('.btn-view-more').style.display = 'none'
        
    }  else {    
        for (let i = 0; i < 6; i++) {
            li += `
                <li onclick='saveID(${newList[i].id}) 'class="item">             
                    <a class="d-flex" href="product.html">
                        <img src="${newList[i].img}" alt="" width="75px" height="75px">
                        <div class="content">
                            <div class="name">${newList[i].name}</div>
                            <div class="price">$${newList[i].price}</div>
                        </div>
        
                    </a>
                </li>
                `
        }        
        document.querySelector('.btn-view-more').style.display = 'block'




    } 
   
    document.querySelector('.row-result').innerHTML = li

})

const btnViewMore = document.querySelector('.view-more')
btnViewMore.addEventListener('click', function(e) {
    // window.open('search.html')
})

function saveID(id) {
    localStorage.setItem('idProduct', JSON.stringify(id))
}


