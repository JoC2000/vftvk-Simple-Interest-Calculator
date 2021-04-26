function compute() {   

    let principal = document.getElementById("principal");
    let rate = document.getElementById("rate");

    let years = document.getElementById("years").value;
    let year = new Date().getFullYear()+parseInt(years);
    
    let amount = principal.value * years * rate.value/100;

    document.getElementById("result").innerHTML = "asdfdfssadf"+"<bold class='highlight'>"+ rate.value +"</bold>" + "asasadadas"

 

    document.getElementById("result").innerHTML = "\<br\>\<br\>If you deposit "+ "<bold class='highlight'>" + principal.value + "</bold>" + ",\<br\>at \
    an interest rate of " +"<bold class='highlight'>"+ rate.value+"%"+"</bold>" +"\<br\>You will receive an amount of "+ "<bold class='highlight'>" +amount + "</bold>" +",\<br\> in\
    the year "+ "<bold class='highlight'>" + year + "</bold>" +".\<br\>" 

  

    // document.getElementById("result").innerHTML = principal.value;

    
}

function updateRate(){
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}

