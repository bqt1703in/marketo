var loginName = JSON.parse(localStorage.getItem('userName'))
var listUser = JSON.parse(localStorage.getItem('listUser'))
var user = listUser.find((val) => val.loginName === loginName)

document.getElementById('default').checked = true
var btnCon = document.querySelector('.btnCon')
btnCon.addEventListener('click', function(e) {
    e.preventDefault()
    if (!document.getElementById('default').checked && !document.getElementById('newaddress').checked) {
        alert('Vui lòng lựa chọn thông tin thanh toán')
        return      
    } else if (user.name === undefined ||
               user.address === undefined ||
               user.phoneNumber === undefined ||
               user.email === undefined) {
        alert('Vui lòng cập nhật thông tin thanh toán')
        window.location.href = 'profile.html'
        return
    } else {
        if (document.getElementById('default').checked) {
            document.querySelector('.full-name').value = user.name
            document.querySelector('.address').value = user.address
            document.querySelector('.phone').value = user.phoneNumber
            document.querySelector('.email').value = user.email
        } 
    }
    if (document.getElementById('newaddress').checked) {
        document.querySelector('.full-name').value = ""
        document.querySelector('.address').value = ""
        document.querySelector('.phone').value = ""
        document.querySelector('.email').value = ""
    }
})

const btnConfirm = document.querySelector('.btn-confirm')
btnConfirm.addEventListener('click', function(e) {
    var name = document.querySelector('.full-name').value
    var address = document.querySelector('.address').value 
    var phone = document.querySelector('.phone').value
    var email = document.querySelector('.email').value
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

    alert('Mua hàng thành công')
})
