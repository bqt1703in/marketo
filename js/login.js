
var btn_Login = document.querySelector('.btn_Login')
btn_Login.addEventListener('click', function(e) {
    e.preventDefault();
    var user = JSON.parse(localStorage.getItem('listUser'))
    var name = document.querySelector('#username').value
    var pass = document.querySelector('#password').value 
    let check = 0;
    for (let i = 0; i < user.length; i++) {
        if (name === user[i].loginName && pass === user[i].password) {
            if (user[i].role === 'user') {   
                check = 1
                break
            } else {
                check = 2
                break
            }
        } 
    }
    if (check === 0) {
        alert("Tên đăng nhập hoặc mật khẩu không chính xác")
        var pass = document.querySelector('#password').value = ''

    } else if (check === 1) {
        localStorage.setItem('userName', JSON.stringify(name))
        alert("Đăng nhập thành công")
        window.location.href = 'index.html'
      
    } else if (check === 2) {
        localStorage.setItem('adminName', JSON.stringify(name))
        alert("Đăng nhập thành công")
        window.location.href = 'admin.html'
    }
    
})

var btn_SignUp = document.querySelector('.btn_Signup')
btn_SignUp.addEventListener('click', function(e) {
    e.preventDefault()
    var listUser = JSON.parse( localStorage.getItem('listUser'))
    let userName = document.querySelector('.signup_name').value
    let userPass1 = document.querySelector('.signup_pass1').value
    let userPass2 = document.querySelector('.signup_pass2').value
    console.log(userName)
    console.log(userPass1)
    console.log(userPass2)
    if (userName === '') {
        alert('Vui lòng nhập tên đăng đăng nhập')
        return;
    }
    if (userPass1 === '') {
        alert('Vui lòng nhập mật khẩu')
        return;
    }
    if (userPass2 === '') {
        alert('Vui lòng xác nhận mật khẩu')
        return;
    }
    if (userPass1.length < 8) {
        alert('Mật khẩu phải lớn hơn 8 kí tự')
        return;
    }
    for (let i = 0; i < listUser.length; i++) {
        if (userName === listUser[i].loginName) {
            alert("Tên đăng nhập đã được lựa chọn. Vui lòng chọn tên khác")
            return;
        }
    }

    if (userPass1 === userPass2) {
        var user = {
            loginName: userName,
            password: userPass2,
            role: 'user'
        }
        listUser.push(user)
        localStorage.setItem('listUser', JSON.stringify(listUser))
        localStorage.setItem('userName', JSON.stringify(userName))   
        localStorage.setItem('pass', JSON.stringify(userPass1))
        
        alert("Đăng kí tài khoản thành công")
        // window.open('/index.html')
        window.location.href = 'index.html'
    } else {
        alert("Mật khẩu xác nhận không khớp. Vui lòng nhập lại")
        let userPass1 = document.querySelector('.signup_pass1').value = ''
        let userPass2 = document.querySelector('.signup_pass2').value = ''
    }
})