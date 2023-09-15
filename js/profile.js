var userName = JSON.parse(localStorage.getItem('userName'))
var listUser = JSON.parse(localStorage.getItem('listUser'))
document.querySelector('.title-bar').innerText = `Marketo - Profile - "${userName}"`
document.querySelector('.loginName').innerText = userName
document.querySelector('.avatarUser').innerText = userName.charAt(0)
const btn_Infor = document.querySelector('.infor')
btn_Infor.addEventListener('click', function(e) {
    e.preventDefault()
    fadeToggle('.update-profile')
    this.style.color = '#0056b3';
})

const btn_Save1 = document.querySelector('.save1')
btn_Save1.addEventListener('click', function(e) {
    e.preventDefault()
    let curent = document.querySelector('#curent-pass').value
    let newpass = document.querySelector('#new-pass').value
    let confirm = document.querySelector('#confirm').value
    
    if (curent === '' || newpass === '' || confirm === '') {
        alert('Mật khẩu không hợp lệ. Vui lòng nhập lại')
        return;
    }
    if (newpass.length < 8) {
        alert('Mật khẩu phải từ 8 kí tự trở lên')
        return;
    }
    var check = 0;
    for (let i = 0; i < listUser.length; i++) {
        if (userName === listUser[i].loginName) {
            if (curent === listUser[i].password) {
                
            } else {
                check++
                
            }
        } else {
    
        }
    }
    if (check != 0) {
        alert('Mật khẩu không đúng')
        return;
    }
   
    if (newpass != confirm) {
        alert("Mật khẩu xác nhận không đúng")
        return;
    }
    for (let i = 0; i < listUser.length; i++) {
        if (userName === listUser[i].loginName) {
            listUser[i].password = confirm
        }
    }

    document.querySelector('.yes-no').style.display = 'flex'
    const yes = document.querySelector('.yes')
    const no = document.querySelector('.no')
    yes.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelector('.yes-no').style.display = 'none'
        alert('Đổi mật khẩu thành công')
        localStorage.setItem('listUser', JSON.stringify(listUser))
    }) 
   
    no.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelector('.yes-no').style.display = 'none'
    }) 
    
})
const btn_Save2 = document.querySelector('.save2')
btn_Save2.addEventListener('click', function(e) {
    e.preventDefault()
    let name = document.querySelector('#fullname').value
    let phone = document.querySelector('#phone').value
    let email = document.querySelector('#email').value
    let address = document.querySelector('#address').value

    if (name === '') {
        alert('Vui lòng nhập tên')
        return;
    }
    if (phone === '') {
        alert('Vui lòng nhập số điện thoại')
        return;
    }
    if (email === '') {
        alert('Vui lòng nhập email')
        return;
    }
    if (address === '') {
        alert('Vui lòng nhập địa chỉ')
        return;
    }
    var check1 = 0
    for (let i = 0; i < name.length; i++) {
        if ((name.charCodeAt(i) >= 65 && name.charCodeAt(i) <= 90) || 
            (name.charCodeAt(i) >= 97 && name.charCodeAt(i) <= 122) || name.charCodeAt(i) == 32) {
                
        } else {
            check1++
        }
    }
    if (check1 != 0) {
        alert('Tên không hợp lệ. Vui lòng nhập lại')
        return;
    }
    var check2 = 0
    if (phone.charAt(0) != '0') {
        check2++
    }
    if (phone.length < 10) {
        check2++
    }
    for (let i = 0; i < phone.length; i++) {
        if ((phone.charCodeAt(i) >= 65 && phone.charCodeAt(i) <= 90)  || 
            (phone.charCodeAt(i) >= 97 && phone.charCodeAt(i) <= 122) ) {
                check1++  
        } 
    }
    if (check2 != 0) {
        alert('Số điện thoại không hợp lệ. Vui lòng nhập lại')
        return;
    }
    var check3 = 0;
    for (let i = 0; i < email.length; i++) {
        if (email.charCodeAt(i) === 64) {
            check3++
        } 
    }
    if (check3 === 0) {
        alert('Email không hợp lệ. Vui lòng nhập lại')
        return
    }

    for(let i = 0; i < listUser.length; i++) {
        if (userName === listUser[i].loginName) {
            listUser[i].name = name
            listUser[i].phoneNumber = phone           
            listUser[i].address = address
            listUser[i].email = email
            // listUser[i].role = 'user'
        }
    }
    document.querySelector('.yes-no').style.display = 'flex'
    const yes = document.querySelector('.yes')
    const no = document.querySelector('.no')
    yes.addEventListener('click', function(e) {
        e.preventDefault()     
        document.querySelector('.yes-no').style.display = 'none'
        alert('Cập nhật thông tin thành công')
        localStorage.setItem('listUser', JSON.stringify(listUser))
    }) 
   
    no.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelector('.yes-no').style.display = 'none'
        return
    }) 
    
})
const btn_Dont2 = document.querySelector('.dont')
btn_Dont2.addEventListener('click', function(e) {
    e.preventDefault()
    let name = document.querySelector('#fullname').value = ''
    let phone = document.querySelector('#phone').value = ''
    let email = document.querySelector('#email').value = ''
    let address = document.querySelector('#address').value = ''
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


var user = listUser.find((val) => val.loginName === userName)
document.getElementById('curent-pass').value = 'laptrinhweb'
if (user.name === undefined ||
    user.address === undefined ||
    user.phoneNumber === undefined ||
    user.email === undefined) {
    let name = document.querySelector('#fullname').value = ''
    let phone = document.querySelector('#phone').value = ''
    let email = document.querySelector('#email').value = ''
    let address = document.querySelector('#address').value = ''
    } else {
        let name = document.querySelector('#fullname').value = user.name
        let phone = document.querySelector('#phone').value = user.phoneNumber
        let email = document.querySelector('#email').value = user.email
        let address = document.querySelector('#address').value = user.address
    }
