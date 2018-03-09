var Key = "yourkey";
var techoffice;


function sendRequest(){
    let key = document.getElementById("key").value;
    techoffice = new techOffice(key);

    document.addEventListener("TechOfficeError", function(event){
        document.getElementById("generateTable").innerHTML = "";
        error = document.getElementById("error");
        error.style.visibility = "visible";
        error.innerHTML = event.detail.type + " : " + event.detail.value;
    });

    techoffice.getSensorDistinct(responseHandling);
}

function responseHandling(response){
    let table = document.getElementById("generateTable"); 
    table.innerHTML = "";

    console.log(document.getElementById("error").style.visibility);
   if(document.getElementById("error").style.visibility != "hidden"){
        document.getElementById("error").style.visibility = "hidden";
   }

    for (let i = 0; i < response.length; i++) {
        let td = document.createElement('td');
        let tr = document.createElement('tr');

        td.innerHTML = response[i];
        tr.appendChild(td);
        table.appendChild(tr);
    }
}