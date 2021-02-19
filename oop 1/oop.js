var inYourName=document.getElementById("in");
var inYourAge=document.getElementById("in2");
var Enter=document.getElementById("enter");
var out=document.getElementById("second");
let user = {
    Name:"Jamil",
    Last:  "Afouri",
    Age: 20,
    getFullName: function() {
        return ` FullName: ${user.Name} ${user.Last}`;
    },
    Address:{ 
        jo:"amman",
        us:"california",
    },
    getAddress:()=> `My fuckin address is ${user.Address.jo}`,

    MyAge: function(){
        return `My age is fuckin ${user.Age}`;
    },

};
console.log(user.getFullName());
console.log(user.getAddress());
console.log("My Age is fuckin "+user.Age);
console.log(user.MyAge());

out.innerHTML=inYourName.value+" "+inYourAge.value;