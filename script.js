function compute() {   
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let year = new Date().getFullYear()+parseInt(years);
    let amount = principal*years*rate/100;

    document.getElementById("result").innerHTML = "\<br\>\<br\>If you deposit "+principal +",\<br\>at \
    an interest rate of " +rate+"%\<br\>You will receive an amount of "+amount+",\<br\> in\
    the year "+year+".\<br\>" 

    //Highlight numbers
    // let inputText = document.getElementById("result");
    // let innerHTML = inputText.innerHTML;
    // let index = innerHTML.indexOf(text);
    // if (index >= 0) { 
    //  innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
    //  inputText.innerHTML = innerHTML;
    // }

}

function updateRate(){
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}

