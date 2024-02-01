// Rough Js Control


// when click the .login .switch-menu, one of the span
// if there is a class called 'selected', remove it
// else add it

// var switchMenu = document.querySelector('.login .switch-menu');
var login = document.querySelector('.login');
var form = document.querySelector('.login .form');

login.addEventListener('click', function (e) {
    var switchMenu = login.querySelector('.switch-menu');
    var spans = switchMenu.querySelectorAll('span');
    if (e.target.tagName.toLowerCase() === 'span') {
        for (var i = 0; i < spans.length; i++) {
            if (spans[i].classList.contains('selected')) {
                spans[i].classList.remove('selected');
            }
        }
        e.target.classList.add('selected');
    }

    var smsLogin = form.querySelector('.sms-login');
    var pswLogin = form.querySelector('.psw-login');
    if (spans[0].classList.contains('selected')) {
        pswLogin.classList.add('hidden');
        smsLogin.classList.remove('hidden');
    } else {
        smsLogin.classList.add('hidden');
        pswLogin.classList.remove('hidden');
    }
});


// when click the code, show the area by remove the hidden class
// inside class from countrycode
var countryCode = document.querySelector('.login .form .form-item .country-code');

countryCode.addEventListener('click', function (e) {
    // the hidden class is same level with the chooseArea
    var chooseArea = countryCode.querySelector('.choose-area');
    if (chooseArea.classList.contains('hidden')) {
        chooseArea.classList.remove('hidden');
    } else {
        chooseArea.classList.add('hidden');
    }
}); 


var change = document.querySelector(".container .change");
// change the class name of the container such
// icon-qrcode to icon-qrcode-open

change.addEventListener('click', function (e) {
    // only change the name not adding the class
    var icon = change.querySelector('i');
    if (icon.classList.contains('icon-qrcode')) {
        icon.classList.remove('icon-qrcode');
        icon.classList.add('icon-qrcode-open');
    } else {
        icon.classList.remove('icon-qrcode-open');
        icon.classList.add('icon-qrcode');
    }

    var login = document.querySelector('.login');
    if (login.classList.contains('hidden')) {
        login.classList.remove('hidden');
    } else {
        login.classList.add('hidden');
    }

    var qrcode = document.querySelector('.container .qrcode');
    if (qrcode.classList.contains('hidden')) {
        qrcode.classList.remove('hidden');
    } else {
        qrcode.classList.add('hidden');
    }
});