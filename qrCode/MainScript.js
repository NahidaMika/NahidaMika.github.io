
let imgBox = document.getElementById('imgBox');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');
let hexcolor = document.getElementById('Colorcode');

function GenerateQR() {
    //if (qrText.value.length > 0) {
        //qrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        //imgBox.classList.add("show-img"); // missing a }
    if (qrText.value.length > 0 && hexcolor.value.length < 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }else if (qrText.value.length > 0 && hexcolor.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value + '&bgcolor=' + hexcolor.value;
        imgBox.classList.add("show-img");
    }else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);   
    }
};
