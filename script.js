// function calculateBtn() {
// var selectedDate = document.getElementById("dateinput").value;
// if (selectedDate) {
//     var birthDate = new Date(selectedDate);
//     var currentDate = new Date();
//     var ageInMilliseconds = currentDate - birthDate;
//     var ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
//     document.getElementById("result").innerText = Math.floor(ageInYears) + "years";
// } else {
//     document.getElementById("result").innerText = "Plesase select a date";
// }
// }
// function resetBtn() {
//     document.getElementById("dateinput").value = "";
//     document.getElementById("result").innerText = ""
// }

calculateBtn =function(){
    const dateInputValue = document.querySelector('#dateinput').value;    
    if(dateInputValue)
    {
        const birthDate = new Date(dateInputValue);
        const currentDate = new Date();
        const ageIn = currentDate - birthDate;
        const ageInYears = ageIn/(365.25*24*60*60*1000);
        document.querySelector('#result').innerHTML = Math.floor(ageInYears) + "Yrs";
    }
    else{
        document.querySelector('#result').innerHTML = "Please Select a date";
    }
}

resetBtn = function (){
document.querySelector('#dateinput').value = " ";
document.querySelector('#result').innerHTML = "";
}