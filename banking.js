// 26-6 both widthdraw and deposit input amount in one function
function inputAmount(inputId){
    const inputField = document.getElementById(inputId);
    const inputValue = parseFloat(inputField.value);

    // clear input field
    inputField.value = '';

    return inputValue;
}



// 26-7 (Advanced) Deposit And Withdraw Update With One Function

function updateTotalField(totalFieldId , amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalAmount = parseFloat(totalElement.innerText);

    // updating deposit amount
    totalElement.innerText = totalAmount + amount;
}


// 26-9 (Advanced) Nested Function And Error Handling

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');

    const balanceAmount = parseFloat(balanceTotal.innerText);

    return balanceAmount;
}


// 26-8 (Advanced) Shared Balance Update Function
function updateBalance(amount , isAdd){

    const balanceTotal = document.getElementById('balance-total');

    /* const balanceAmount = parseFloat(balanceTotal.innerText); */


    const balanceAmount = getCurrentBalance();

    if(isAdd == true) {
        balanceTotal.innerText = balanceAmount + amount;
    }else {
        balanceTotal.innerText = balanceAmount - amount;
    }
    
}



// deposite

document.getElementById('depositeBtn').addEventListener('click' , function(){
    
    // calling inputAmount function
    const depositAmount =  inputAmount('deposit-Input');

    if(depositAmount > 0)
    {
        // calling updateTotalField function
        updateTotalField('deposite-total' , depositAmount);
        // update balance
        updateBalance(depositAmount , true);
    }


    /* const depositeInput = document.getElementById('deposit-Input');
    const depositAmount = parseFloat(depositeInput.value); */

    // console.log(depositAmount);

    // get current deposit
   /*  const depositTotal = document.getElementById('deposite-total');
    const depositTotalAmount = parseFloat(depositTotal.innerText);
    // updating deposit amount
    depositTotal.innerText = depositTotalAmount + depositAmount; */

    
        // update balance
    /* const balanceTotal = document.getElementById('balance-total');

    const balanceAmount = parseFloat(balanceTotal.innerText);
     
    balanceTotal.innerText = balanceAmount + depositAmount; */


   


    
});

// widthdraw 
document.getElementById('withdrawBtn').addEventListener('click' , function(){
   
   
     const widthdrawAmount = inputAmount('withdraw-input');

     const currentBalance = getCurrentBalance();

     if(widthdrawAmount > 0 && widthdrawAmount < currentBalance) {
        // calling updateTotalField function
        updateTotalField('withdraw-total' , widthdrawAmount);

        updateBalance(widthdrawAmount , false);
     }

    //  error message
    if(widthdrawAmount > currentBalance)
    {
        alert("insufficient balance");
    }
   
    /* const widthdrawInput = document.getElementById('withdraw-input');

    const widthdrawAmount = parseFloat(widthdrawInput.value) */
    // console.log(widthdrawInput.value)
    
    // update widthdraw
  /*   const totalWidthdraw = document.getElementById('withdraw-total');

    const widthdrawAmountTotal = parseFloat(totalWidthdraw.innerText);

    totalWidthdraw.innerText = widthdrawAmount + widthdrawAmountTotal; */

    // update balance
    /* const balanceTotal = document.getElementById('balance-total');

    const balanceAmount = parseFloat(balanceTotal.innerText); 
    
    balanceTotal.innerText = balanceAmount - widthdrawAmount;  */

    
    
});
