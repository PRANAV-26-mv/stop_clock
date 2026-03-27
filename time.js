var timeew
var count=0;
var mill=0;
var min=0
var hr=0
var table=document.getElementById("tab")
var sum=0;
function result(){
    if(timeew) return;
     timeew = setInterval(()=>{
    mill++;
    if(mill==100){
       count++;
       mill=0;
    }
    if(count==60){
        count=0;
        min++;
    }
    if(min==60){
        min=0;
        hr++;
    }
    
    document.getElementById("millsec").innerHTML=pad(mill)
    document.getElementById("second").innerHTML=pad(count)
    document.getElementById("mintue").innerHTML=pad(min)
    document.getElementById("hour").innerHTML=pad(hr);
    },10)}


function refresh(){
    clearInterval(timeew);
    timeew=null;
     count=0;
     mill=0;
     min=0
     hr=0
    document.getElementById("millsec").innerHTML=pad(mill)
    document.getElementById("second").innerHTML=pad(count)
    document.getElementById("mintue").innerHTML=pad(min)
    document.getElementById("hour").innerHTML=pad(hr);
    sum=0;
    table.innerHTML="";
}
function stopp(){
clearInterval(timeew);
}
function pad(num){
    return num<10?"0"+num:num
}

function addes(){
    sum++;
    var row=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var td4=document.createElement("td");
    var td5=document.createElement("td");
    td5.innerHTML=sum;
    td1.innerHTML=pad(hr)
    td2.innerHTML=pad(min)
    td3.innerHTML=pad(count)
    td4.innerHTML=pad(mill)
    row.appendChild(td5);
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    table.append(row);
    
}