// function login(event) {
//     event.preventDefault();

//     const username = document.getElementById("username").value;

//     const password = document.getElementById("password").value;

    // confirm(username + " " + password);
//     const user = localStorage.getItem("fullname");
//     const pass = localStorage.getItem("password");
//     console.log("user:", user, "pass:", pass);

//     if (username === user && password === pass) {
//         alert("Login successful!");
//         window.location.href = "./home.html";
//         // Redirect to another page or perform other actions
//     } else {
//         alert("Invalid username or password.");
//     }
// }



// function signup(event) {
//     event.preventDefault();

//     const fullname = document.getElementById("fullname").value;

//     const password = document.getElementById("passwd").value;


//     localStorage.setItem("fullname", fullname);
//     localStorage.setItem("password", password);
//     alert(fullname + " " + password);

//     console.log("Login creation:", fullname, password);
// }

// const button = document.getElementById("myButton");
// button.addEventListener("click", doSomething);

// function doSomething() {
//     alert("Button was clicked!");
// }


// let button = document.getElementById("myButton");
// let counter = 0;
// button.addEventListener("click", count);
// function count(){
//     counter++;
//     console.log(counter);
// }

// const myBox = document.getElementById("myBox");
// myBox.addEventListener("click", changeColor);

// function changeColor(event) {
// event.target.style.backgroundColor = "blue";
// event.target.style.color = "white";
// event.target.textContent = "The div is Clicked!";

// }


// using event function
// const myBox = document.getElementById("myBox");
// myBox.addEventListener("click", function(event) {
//      event.target.style.backgroundColor = "blue";
//  event.target.style.color = "white";
// event.target.textContent = "The div is Clicked!";
// });

//using arrow function
// const myBox = document.getElementById("myBox");
// myBox.addEventListener("click", (event) => {
//      event.target.style.backgroundColor = "blue";
//  event.target.style.color = "white";
// event.target.textContent = "The div is Clicked!";
// });

// //an element can have multiple event listerners
// myBox.addEventListener("mouseover", (event) => {
//      event.target.style.backgroundColor = "yellow";
//  event.target.style.color = "black";
// event.target.textContent = "This is mouse over event!";
// });

// //this is the same div with another event listener
// myBox.addEventListener("mouseout", (event) => {
//      event.target.style.backgroundColor = "brown";
//  event.target.style.color = "white";
// event.target.textContent = "This is mouse out event!";
// });


// const mybutton = document.getElementById("mybutton");
// mybutton.addEventListener("click", (event) => {
//      event.target.style.backgroundColor = "blue";
//  event.target.style.color = "white";
// event.target.textContent = "The button is Clicked!";
// });
// //an element can have multiple event listerners
// mybutton.addEventListener("mouseover", (event) => {
//      event.target.style.backgroundColor = "yellow";
//  event.target.style.color = "black";
// event.target.textContent = "This is mouse over event!";
// });

// //this is the same div with another event listener
// mybutton.addEventListener("mouseout", (event) => {
//      event.target.style.backgroundColor = "brown";
//  event.target.style.color = "white";
// event.target.textContent = "This is mouse out event!";
// });

// //keydown and keyup events
// document.addEventListener("keydown", (event) => {
//     console.log("Key down = ${event.key}");

// })

// document.addEventListener("keyup", (event) => {
//     console.log("Key up = ${event.key}");

// })

// const Box = document.getElementById("Box");
// document.addEventListener("keydown", (event) => {
//     Box.textContent = "This content is changed";
//     Box.style.backgroundColor = "tomato";

// })
// document.addEventListener("keyup", (event) => {
//     Box.textContent = "This is another Div";
//     Box.style.backgroundColor = "lightblue";

// })

//using arrows on the keyboard to move the div or and element
// const Box = document.getElementById("Box");
// let moveAmount = 10;
// let x = 0;
// let y = 0;
// document.addEventListener("keydown", event => {
//     if (event.key.startsWith("Arrow")) {
//         event.preventDefault();
//         switch (event.key) {
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;

//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;

//         }
//         Box.style.top = `${y}px`;
//         Box.style.left = `${x}px`;   
//     }
// })

//adding a div element to our html page + asigning event listener to it
// const newDiv = document.createElement("div");
// newDiv.style.width = "200px";
// newDiv.style.height = "200px";
// newDiv.style.backgroundColor = "lightblue";
// newDiv.textContent = "this is a newly created div"
// newDiv.addEventListener("click", e =>{
//    if(e.target.matches("div")){
//  console.log("hi");
//    }
// })
// document.body.append(newDiv);



//creating an element using dom

// const ul = document.querySelector("ul");
// const li = document.createElement("li");
//adding elements

// ul.append(li);
//modifyin the text
// li.innerText = 'another item';
//modifying attributes & classes
// li.setAttribute('class', 'items');

//removing attribute from an element
//  li.removeAttribute("class");

 //checking if the element contains the class
// console.log(li.classList.contains("class-list"));

//changing the style of a listed elements or items

// const listItem = document.querySelectorAll(".items");

// for(let i = 0; i < listItem.length; i++){
// listItem[i].style.fontSize = "30px";
// }


//getting the attribute of an existing element
// const title = document.querySelector("#heading");
// console.log(title.getAttribute("id"));

//removing elements
// li.remove();


//element.addEventListener("click", function);
// const buttonTwo = document.querySelector(".btn-2");

// buttonTwo.addEventListener('click',alertBtn);

// function alertBtn(){
//     alert('i love javascript');
// };

//mouseover event
// const box3 = document.querySelector('.box-3');
// box3.addEventListener('mouseover', changeColor);
// function changeColor(){
//     box3.style.backgroundColor = "red";
// }


//reveal event
// const revealBtn = document.querySelector('.reveal-btn');
// const hidden = document.querySelector('.hidden-content');

// revealBtn.addEventListener('click', revealContent);
// function revealContent(){
//     if(hidden.classList.contains('reveal-btn')){
//         hidden.classList.remove('reveal-btn')
//     }else{
//         hidden.classList.add('reveal-btn')
//     }
// }


//this is another way of reveal event
// const revealBtn = document.querySelector('.reveal-btn');
// const hidden = document.querySelector('.hidden-content');

// revealBtn.addEventListener('click', () => {
//   hidden.classList.toggle('is-revealed');   // clearer name
//   // update aria for a11y
//   const expanded = hidden.classList.contains('is-revealed');
//   revealBtn.setAttribute('aria-expanded', expanded);
// });

//Event Probagation
// window.addEventListener('click', function(){
//   console.log('window');
// },false);
// document.addEventListener('click', function(){
//   console.log('Document');
// },false);

// let div2 = document.querySelector('.div2').addEventListener('click', function(){
//   // e.stopPropagation()
//   console.log('DIV 2');
// },{once: false});

// let div1 = document.querySelector('.div1').addEventListener('click', function(){
//   console.log('DIV 1');
// },false);

// let btn =document.querySelector('.button').addEventListener('click', function(e){
//   e.preventDefault()
//   console.log(e.target.innerText = 'is clicked');
// },false);


//even delegation: applying style to list items by adding eventListener to each child
// document.querySelector('#football').addEventListener('click', function(e){
//   console.log('football is clicked');

//   const target = e.target;
//   if(target.matches('li')){
//     target.style.backgroundColor = 'lightblue';
//   }
  
// })
// document.querySelector('#basketball').addEventListener('click', function(e){
//   console.log('basketball is clicked');

//   const target = e.target;
//   if(target.matches('li')){
//     target.style.backgroundColor = 'lightblue';
//   }
  
// })
// document.querySelector('#boxing').addEventListener('click', function(e){
//   console.log('boxing is clicked');

//   const target = e.target;
//   if(target.matches('li')){
//     target.style.backgroundColor = 'lightblue';
//   }
  
// })
// document.querySelector('#tennis').addEventListener('click', function(e){
//   console.log('tennis is clicked');

//   const target = e.target;
//   if(target.matches('li')){
//     target.style.backgroundColor = 'lightblue';
//   }
  
// })
// document.querySelector('#golf').addEventListener('click', function(e){
//   console.log('golf is clicked');

//   const target = e.target;
//   if(target.matches('li')){
//     target.style.backgroundColor = 'lightblue';
//   }
  
// })




//even delegation
// document.querySelector('#sports').addEventListener('click', function(e){

//   console.log(e.target.getAttribute('id') + 'is clicked');
//   const target = e.target;
//   if(target.matches('li')){
//     target.style.backgroundColor = 'blue';
//   }
  
// })

// let sports = document.querySelector('#sports');
// const newSport = document.createElement('li');
// newSport.innerText = 'rugby';
// newSport.setAttribute('id', 'rugby');
// sports.append(newSport);

//project code 
// let btn = document.querySelector('#new-qoute');
// let qoute = document.querySelector('.qoute');
// const person = document.querySelector('.person');

// const quotes = [{
//     quote : `"If you wan to live a happy life,
//     tie it to a goal, not to people or things."`,
//     person : `Albert Einestein`
// }];

// btn.addEventListener('click', function(){
  
//     let random = Math.floor(Math.random() * quotes.length);

//     qoute.innerText = quotes[random].quote;
//     person.innerText = quotes[random].person;
// })


//project2 : modal code in js
let openBtn = document.querySelector('#open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');
//event listeners
openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';

})

closeBtn.addEventListener('click', function(){
    modalContainer.style.display = 'none';
})



