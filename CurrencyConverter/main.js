//Need to track dollar input tag
//Need to track dollar input value
//Need to output converted euro value into euro input tag
const dollarInput = document.getElementById("dollarAmount");

dollarInput.addEventListener("input", convertToYen);

function convertToYen(){
    //take the actual dollar input value
    //multiply it by conversion rate(105.33)
    //set value of yen input tag to converted value
    let yenValue = document.getElementById("dollarAmount").value * 105.33;
    document.getElementById("yenAmount").value = yenValue;
}
