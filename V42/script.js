const form = document.getElementById("form");
const friendsAmount =  document.getElementById("friendsAmount");
const baseSum =  document.getElementById("totalSum");
const dricksAmount =  document.getElementById("dricksAmount");
const paymentWrapper =  document.getElementById("paymentWrapper");
const submitButton = document.querySelector("button")
const payAmount = document.querySelector("#payAmount")
const charityAmount = document.querySelector("#charityAmount")
const header = document.querySelector("#header")
const processingFee = 1.1
const splittingFee = 0.5
const nonOptionalTipFee = 0.3
const totalCostEle = document.getElementById("totalCost")

submitButton.addEventListener("click", function (clickEvent) {
    clickEvent.preventDefault();

    header.classList.add("header")

    const {message, totalCost} = calcTotalAmount(baseSum.value, dricksAmount.value)
    // const amountPerPerson = Math.ceil((totalSum.value * (dricksAmount.value / 100 + 1))/ friendsAmount.value);
    const amountPerPerson = totalCost / friendsAmount.value;

    const charityValue = (amountPerPerson * friendsAmount.value) - (baseSum.value * (dricksAmount.value / 100 + 1))

    form.style.display = "none";
    paymentWrapper.style.display = "flex"
    
    totalCostEle.textContent = message;
    payAmount.textContent = `${amountPerPerson} kr`;
    charityAmount.textContent = `${charityValue} kr`;
    

})

function calcAmountPerPerson(baseSum, dricksAmount, friendsAmount) {
    return Math.ceil((baseSum * (dricksAmount / 100 + 1))/ friendsAmount);
}
function calcTotalAmount(baseSum, dricks) {
    const processingSum = processingFee * baseSum;
    const splittingSum = splittingFee * baseSum;
    const nonOptionalTip = nonOptionalTipFee * baseSum;
    const totalCost = (processingSum + splittingSum + nonOptionalTip) * (dricks / 100 + 1)

    return {message: `Kostnad: ${baseSum} 
    Processavgift: ${processingSum}
    Delningsavgift ${splittingSum}
    Serviceavgift${nonOptionalTip}
    Totalt: ${totalCost}`, totalCost: totalCost}
    

}