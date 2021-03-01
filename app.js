const firstName = document.getElementById("firstname");  
const startingBid = document.getElementById("startingbid"); 
const education = document.getElementById("education"); 
const networth = document.getElementById("networth"); 
const skills = document.getElementsByClassName("skills"); 
const age = document.getElementsByName("age");
const button = document.getElementById("submit");
const love_letter = document.getElementById("love_letter");

const calculate = () => {
    let name = firstName.value; 
    let price = Number(startingBid.value); 
    let letter = love_letter.value;
    if (name != "") { 
        price = getNewPrice(price, education)
        var networth = document.getElementById("networth").value;

        if (networth==1) {
            startingBid *= 2;
          } else if (networth==2) {
            startingBid*=1.5;
          } else {
            startingBid*=1.2;
          }
    
         if(document.getElementById("skills").value) {
            startingBid += 100;
        }
        if(document.getElementById("skills").value){
            startingBid += 200;
        }
        if(document.getElementById("skills").value){
            startingBid += 150;
        }
        if(document.getElementById("skills").value){
            startingBid += 100;
        }


        let person = {
            fullName: name,
            finalPrice: price,
            loveLetter: letter
        }
        document.getElementById("result").innerHTML = `The price for ${person.fullName} is ${person.finalPrice}. Your love letter is ${person.loveLetter}`;
    }
    else {
        alert("Name and starting bid cannot be empty");
    }
}


const getNewPrice = (price, criteria) => {
    return price * Number(criteria.value);
}


const getCheckboxValuesForLoop = (html_collection, price) => { 
	for (let i=0; i < html_collection.length; i++) {  
		if (html_collection[i].checked && Number.isInteger(Number(html_collection[i].value))) {
			price = price + Number(html_collection[i].value)
		}
		else if (html_collection[i].checked && !Number.isInteger(html_collection[i].value)) {
			price = price * Number(html_collection[i].value)
		}
	}
	return price;
}
const reputation=document.getElementById("reputation");
if(document.getElementById("reputation").value){
    startingBid *= 0.85;
}
if(document.getElementById("reputation").value){
    startingBid *= 0.9;

}
if(document.getElementById("reputation").value){
    startingBid -= 200;	
}


const getCheckboxValuesFilterReduce = (html_collection, price) => { 
    let list = Array.from(html_collection).filter(filteration) 
    let result = list.reduce(reducer, price)
    return result;
}

const reducer = (accumulator, item) => {
    return accumulator + Number(item.value);
}
const filteration = (item) => {
    return item.checked;
}


const getRadioValue = (node_list, price) => {  
    node_list.forEach(item => {
        if (item.checked) {
            price = price * Number(item.value)
        }
    })
    return price;
}

button.addEventListener("click", calculate)



