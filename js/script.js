const rowElem = document.querySelector(".row");
console.log(rowElem);

let rowString = "";
for (let i = 1; i <= 100; i++) {
    console.log(i);
    let result = i;
    if ((i % 3 === 0) && (i % 5 === 0)){
        result = "fizzbuzz";
    
    }
     else if (i % 3 === 0) {
        result= "fizz";
        
        
    }
    else if (i % 5 === 0){
         result = "buzz";
        
    }
  rowString += `<div class="circle ${result}"> ${result}</div>`
     console.log(`${i}`);



    

}

rowElem.innerHTML = rowString;