const form = document.getElementById("form");
const friendsAmount =  document.getElementById("friendsAmount");
const totalSum =  document.getElementById("totalSum");
const dricksAmount =  document.getElementById("dricksAmount");
const paymentWrapper =  document.getElementById("paymentWrapper");
const submitButton = document.querySelector("button")
const payAmount = document.querySelector("#payAmount")
const charityAmount = document.querySelector("#charityAmount")


submitButton.addEventListener("click", function (clickEvent) {
    clickEvent.preventDefault();

    // const amountPerPerson = Math.ceil((totalSum.value * (dricksAmount.value / 100 + 1))/ friendsAmount.value);
    const amountPerPerson = calcAmountPerPerson(totalSum.value, dricksAmount.value, friendsAmount.value)

    const charityValue = (amountPerPerson * friendsAmount.value) - (totalSum.value * (dricksAmount.value / 100 + 1))

    form.style.display = "none";
    paymentWrapper.style.display = "flex"

    payAmount.textContent = `${amountPerPerson} kr`;
    charityAmount.textContent = `${charityValue} kr`;
})

function calcAmountPerPerson(totalSum, dricksAmount, friendsAmount) {
    return Math.ceil((totalSum * (dricksAmount / 100 + 1))/ friendsAmount);
}