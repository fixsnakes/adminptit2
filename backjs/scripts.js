
function GotoRegisterPage(){
    window.location.href = "register.html";
}

function GotoLoginPage(){
    window.location.href = "index.html";
}

function ValidateFormLogin(){
    var statusParagraph = document.getElementById('status-paragraph');
    statusParagraph.textContent = '';
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
// Thiết lập nội dung cho thẻ p

    if(username === '' || password === ''){
        statusParagraph.textContent = 'Vui Lòng Nhập Đầy Đủ Thông Tin!';
        statusParagraph.style.color = 'red';
        statusParagraph.style.fontWeight = 'bold';
    }
    else if(username.length < 6 || password.length < 6){
        statusParagraph.textContent = 'Tài Khoản Và Mật Khẩu Tối Thiểu 6 Ký Tự!';
        statusParagraph.style.color = 'red';
        statusParagraph.style.fontWeight = 'bold';
    }
    else if(username != 'admintunglam' && password != 'admintunglam'){
        statusParagraph.textContent = 'Tài Khoản Hoặc Mật Khẩu Sai!';
        statusParagraph.style.color = 'red';
        statusParagraph.style.fontWeight = 'bold';
    }

    else{
        statusParagraph.textContent = 'Đăng Nhập Thành Công!';
        statusParagraph.style.color = 'green';
        statusParagraph.style.fontWeight = 'bold';
        window.location.href = "dashboard.html";
    }

}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


function ValidateFormRegister(){
    var statusParagraph = document.getElementById('status-paragraph');
    statusParagraph.textContent = '';
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var repassword = document.getElementById('re-password').value;
// Thiết lập nội dung cho thẻ p


    // Example usage:
    if (validateEmail(email)) {
        //
    } else {
        statusParagraph.textContent = 'Vui Lòng Nhập Đúng Định Dạng Email!';
        statusParagraph.style.color = 'red';
        statusParagraph.style.fontWeight = 'bold';
        return 0;
    }

    if(username === '' || password === '' || repassword === '' || email === ''){
        statusParagraph.textContent = 'Vui Lòng Nhập Đầy Đủ Thông Tin!';
        statusParagraph.style.color = 'red';
        statusParagraph.style.fontWeight = 'bold';
    }
    else if(username.length < 6 || password.length < 6){
        statusParagraph.textContent = 'Tài Khoản,Mật Khẩu Tối Thiểu 6 Ký Tự!';
        statusParagraph.style.color = 'red';
        statusParagraph.style.fontWeight = 'bold';
    }
    else if(password != repassword){
        statusParagraph.textContent = 'Mật Khẩu Xác Nhận Không Khớp!';
        statusParagraph.style.color = 'red';
        statusParagraph.style.fontWeight = 'bold';
    }

    else{
        statusParagraph.textContent = 'Đăng Ký Thành Công!';
        statusParagraph.style.color = 'green';
        statusParagraph.style.fontWeight = 'bold';
        window.location.href = "index.html";
    }

}








//#endregion









//student.js


