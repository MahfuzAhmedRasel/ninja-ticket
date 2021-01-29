// event listener 
var fristClassIncrease = document.getElementById('first-increase');
fristClassIncrease.addEventListener('click', function(){
    numberUp('frist-number');
    priceCount(150);
})
var fristClassDecrease = document.getElementById('first-decrease');
    fristClassDecrease.addEventListener('click', function(){
    numberDown('frist-number');
    priceCountDown(150);
})

// Event Listener Economy 
var economyIncrease = document.getElementById('economy-increase');
economyIncrease.addEventListener('click', function(){
    numberUp('economy-number');
    priceCount(100);
})
var economyDecrease = document.getElementById('economy-decrease');
economyDecrease.addEventListener('click', function(){
    numberDown('economy-number');
    priceCountDown(100);
})

// Buy ticket
 var buyTicket = document.getElementById('buy-tecket');
 buyTicket.addEventListener('click', function(){
     document.querySelector('.congress').style.display = 'block';

     var priceUpdate = document.getElementById('price-update');
     var pariceMain = document.getElementById('total').innerText;
     priceUpdate.innerText = pariceMain;
 })

// Ticket Number Increase Funtion

function numberUp(ticketClass){
    var ticketNumber = document.getElementById(ticketClass);
    var newTicketNumber = parseFloat(ticketNumber.value);
    var increaseNumber = newTicketNumber + 1;
    ticketNumber.value = increaseNumber;
}
// Ticket Number Decrease Funtion
function numberDown(ticketClass){
    var ticketNumber = document.getElementById(ticketClass);
    var newTicketNumber = parseFloat(ticketNumber.value);
        if(newTicketNumber > 0){
            var decreaseNumber = newTicketNumber - 1;
            ticketNumber.value = decreaseNumber;
        }
    
}
// price increase
function priceCount(price){

   
    var subTotal = document.getElementById('sub-total');
    var newSubtotal= parseFloat(subTotal.innerText);
    var subTotalNumber = newSubtotal + price;
    subTotal.innerText = subTotalNumber;

    var vatCharge = document.getElementById('vat');
   vatCharge.innerText = subTotalNumber * 0.1;
   
   var vatCargeNumber = parseFloat(vatCharge.innerText);

   var total = document.getElementById('total');
   total.innerText = subTotalNumber + vatCargeNumber;


}
function priceCountDown(price){
    
    var subTotal = document.getElementById('sub-total');
    var newSubtotal= parseFloat(subTotal.innerText);
        if(newSubtotal >= price){
            var subTotalNumber = newSubtotal - price;
            subTotal.innerText = subTotalNumber;
            var vatCharge = document.getElementById('vat');
            vatCharge.innerText = subTotalNumber * 0.1;
            
            var vatChargeNumber = parseFloat(vatCharge.innerText);
         
            var total = document.getElementById('total');
            total.innerText = subTotalNumber + vatChargeNumber;
        }
    
}
