const button=document.querySelectorAll("button")
const  displaytag=document.querySelectorAll("p")[1]
const resulttag=document.querySelectorAll("p")[0]

let operation=null
let operationcount=0

let checkOperationCount=(val,operation)=>{
if(val>1){
    alert("Only one operation at a time is supported")
    return displaytag.innerText=displaytag.innerText
}else{
    return displaytag.innerText=displaytag.innerText+operation
}
}
let toNumber=(arr)=>{
return arr=arr.map(Number)
}

button[0].onclick=function (){
    return displaytag.innerText=displaytag.innerText+1
}
button[1].onclick=function (){
    return displaytag.innerText=displaytag.innerText+2
}
button[2].onclick=function (){
    return displaytag.innerText=displaytag.innerText+3
}

button[4].onclick=function (){
    return displaytag.innerText=displaytag.innerText+4
}
button[5].onclick=function (){
    return displaytag.innerText=displaytag.innerText+5
}
button[6].onclick=function (){
    return displaytag.innerText=displaytag.innerText+6
}
button[8].onclick=function (){
    return displaytag.innerText=displaytag.innerText+7
}
button[9].onclick=function (){
    return displaytag.innerText=displaytag.innerText+8
}
button[10].onclick=function (){
    return displaytag.innerText=displaytag.innerText+9
}
button[13].onclick=function (){
    return displaytag.innerText=displaytag.innerText+0
}
button[3].onclick=function (){
    operation="+"
    operationcount++
  checkOperationCount(operationcount,operation)
    
}
button[7].onclick=function (){
    operation="-"
    operationcount++
  checkOperationCount(operationcount,operation)
}
button[11].onclick=function (){
    operation="*"
    operationcount++
  checkOperationCount(operationcount,operation)
}
button[15].onclick=function (){
    operation="/"
    operationcount++
    checkOperationCount(operationcount,operation)
}
button[14].onclick=function (){
    str=String(displaytag.innerText)
    let result=0
       if(operation==="+"){
        str=str.split("+")
       str=toNumber(str)
         result=(str[0]+str[1])
       }
       else if(operation==="-"){
        str=str.split("-")
        str=toNumber(str)
         result=str[0]-str[1]
      }
      else if(operation==="/"){
        str=str.split("/")
        str=toNumber(str)
         result=str[0]/str[1]
      }else if (operation==="*"){
        str=str.split("*")
        str=toNumber(str)
         result=str[0]*str[1]
      }
      operationcount=0
    displaytag.innerHTML=""
    return resulttag.innerText=result
}
button[12].onclick=()=>{
    operationcount=0
    result=""
    displaytag.innerHTML=result
    return resulttag.innerText=result
}