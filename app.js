let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

const generateQR = () => {
    if (qrText.value.trim().length > 0) { // Bo'sh joylarni ham tekshirish
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value.trim());
        imgBox.classList.add("show-img");
    }    
    else{
        qrText.classList.add("error");
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
    }
}