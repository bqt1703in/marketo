var btn_Login_Logout = document.querySelector('.login')

btn_Login_Logout.addEventListener('click', function(e) {
    let userName = JSON.parse(localStorage.getItem('userName'))
    let pass = JSON.parse(localStorage.getItem('pass'))

    if (userName != null && pass != null) {
        localStorage.setItem('userName', JSON.stringify(''))
        localStorage.setItem('pass', JSON.stringify(''))
    } else {
      
    }
})
