
// ____________________________Handle Deposit Button________________________
document.getElementById('btn-deposite').addEventListener('click' , function(){

    // ______get deposit amount_____
    const depositeInput =document.getElementById('deposite-input');

    // _______get previous deposit amount______ 
    const totalDeposite = document.getElementById('total-deposite');

    // _______get total balance______
    const totalbalance = document.getElementById('total-balance');

    // ______ add previous $ deposit amount ______
    const currentDeposite = parseFloat(totalDeposite.innerText) + parseFloat(depositeInput.value);
    
    // _______add previous balance & deposit Amount______
    const totalAmount = parseFloat(totalbalance.innerText) + parseFloat(depositeInput.value);

    // ______display total deposit____
    totalDeposite.innerText =currentDeposite;

    // ______display total Balance____
    totalbalance.innerText =totalAmount;

    // ________clear input______
    depositeInput.value= '';
})

// ____________________________Handle Withdraw Button________________________
document.getElementById('btn-withdraw').addEventListener('click' , function(){

    // ______get withdraw amount_____
    const withdrawInput =document.getElementById('withdraw-input');

    // _______get previous withdraw amount______ 
    const totalWithdraw = document.getElementById('total-withdraw');

    // _______get total balance______
    const totalbalance = document.getElementById('total-balance');

    // ______ add previous $ withdraw amount ______
    const currentWithdraw = parseFloat(totalWithdraw.innerText) + parseFloat(withdrawInput.value);
    
    // _______Substraction previous balance & withdraw Amount______
    const totalAmount = parseFloat(totalbalance.innerText) - parseFloat(withdrawInput.value);

    // ______display total deposit____
    totalWithdraw.innerText =currentWithdraw;

    // ______display total Balance____
    totalbalance.innerText =totalAmount;

    // ________clear input______
    withdrawInput.value= '';
})