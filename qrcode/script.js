const qrtext = document.getElementById('qr-text');
const generatebttn = document.getElementById('genbutton');
const downbttn = document.getElementById('downloadbutton');

const qrContainer = document.querySelector('.qr-body');
genbutton.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});
downloadbutton.addEventListener('click' , ()=>{
    let img = document.querySelector('.qr-body img');
    if (img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadbutton.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});
function isEmptyInput(){
    qrtext.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}
    
function generateQRCode(){
    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text:qrtext.value,
        height:150,
        width:150,
        colorLight:"white",
        colorDark:"black",
    });
}