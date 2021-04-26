//Function after pressing the button
function compute() {   
    //Main Variables
    let principal = document.getElementById("principal");
    let rate = document.getElementById("rate");

    //Inner variables
    let years = document.getElementById("years").value;
    let year = new Date().getFullYear()+parseInt(years);
    let amount = principal.value * years * rate.value/100;

    //Making sure the amount value is higher than 0
    if (principal.value > 0){
        //Creating the class "highlight" for the numerica variables to highlight them
        document.getElementById("result").innerHTML = "\<br\>\<br\>If you deposit "+ "<bold class='highlight'>" + principal.value + "</bold>" + ",\<br\>at \
        an interest rate of " +"<bold class='highlight'>"+ rate.value+"%"+"</bold>" +"\<br\>You will receive an amount of "+ "<bold class='highlight'>" +amount + "</bold>" +",\<br\> in\
        the year "+ "<bold class='highlight'>" + year + "</bold>" +".\<br\>" 
    }
    //Making an alert to an invalid amount
    else{
        //Making the alert to delay
        document.getElementById("result").innerHTML = "";
        setTimeout(function() {
            alert("Enter a positive number")
        },10)
        
        //Cleaning the wrong value and setting the focus to the ammount box
        document.getElementById("principal").value = "";
        document.getElementById("principal").focus();
    }
    
}

//Function to update the range value
function updateRate(){
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}