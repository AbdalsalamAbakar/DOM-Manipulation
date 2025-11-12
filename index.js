function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    // confirm(username + " " + password);
    const user = localStorage.getItem("fullname");
    const pass = localStorage.getItem("password");
    console.log("user:", user, "pass:", pass);

    if (username === user && password === pass) {
        alert("Login successful!");
        window.location.href = "./home.html";
        // Redirect to another page or perform other actions
    } else {
        alert("Invalid username or password.");
    }
}



function signup(event) {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;

    const password = document.getElementById("passwd").value;


    localStorage.setItem("fullname", fullname);
    localStorage.setItem("password", password);
    alert(fullname + " " + password);

    console.log("Login creation:", fullname, password);
}

const button = document.getElementById("myButton");
button.addEventListener("click", doSomething);

function doSomething() {
    alert("Button was clicked!");
}


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
const myBox = document.getElementById("myBox");
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
const Box = document.getElementById("Box");
let moveAmount = 10;
let x = 0;
let y = 0;
document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;

            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;

        }
        Box.style.top = `${y}px`;
        Box.style.left = `${x}px`;   
    }
})


