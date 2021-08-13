const purchasePrice = document.querySelector('#purchase-price');
const units = document.querySelector('#no-of-units');
const presentPrice = document.querySelector('#present-price');
const button = document.querySelector('#result');
const result = document.querySelector('#output');
const image = document.querySelector('#image');
const header = document.querySelector('#header');

button.addEventListener('click', checkResult);
 
function checkResult() {
    image.src = 'image.svg';
    let buyingValue = Number(purchasePrice.value) * Number(units.value);
    let presentValue = Number(presentPrice.value) * Number(units.value);
    let profit, loss;
    if (buyingValue > presentValue) {
        loss = (buyingValue - presentValue);
        let lossPercent = (loss / buyingValue)*100;
        image.src = 'loss.gif';
        result.innerText = `Loss is ${lossPercent}% i.e Rs.${loss}.`
        if (lossPercent > 50) {
            header.style.backgroundColor = 'red';
        }
    } else {
        profit = (presentValue - buyingValue) ;
        let profitPercent = (profit / buyingValue)*100;
        image.src = 'happy.gif';
        result.innerText = `Profit is ${profitPercent}% i.e Rs.${profit}.`;
        if( profitPercent > 50) {
            header.style.backgroundColor = 'green';
        } 
    } 
}