// .checked=property that determines the checked state of an HTML checkbox or radio button element


const myCheckBox=document.getElementById("mycheckbox");
const visaBtn=document.getElementById("visabtn");
const masterCardBtn=document.getElementById("mastercardbtn");
const payPalBtn=document.getElementById("paypalbtn");
const mySubmit=document.getElementById("mysubmit");
const subResult=document.getElementById("subresult");
const paymentResult=document.getElementById("paymentresult");

mySubmit.onclick = function() {

    if (myCheckBox.checked) {
        subResult.textContent = 'You are subscribed!';
    } else {
        subResult.textContent = 'You are NOT subscribed!';
    }

    if (visaBtn.checked) {
        paymentResult.textContent = 'You are paying with Visa';
    } else if (masterCardBtn.checked) {
        paymentResult.textContent = 'You are paying with MasterCard';
    } else if (payPalBtn.checked) {
        paymentResult.textContent = 'You are paying with PayPal';
    } else {
        paymentResult.textContent = 'You must select a payment type';
    }
}
