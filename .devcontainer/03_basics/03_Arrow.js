const user = {
    username: "Mihir",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "luffy"
// user.welcomeMessage()

// console.log(this);

// function code(){
//     let username = "Mihir"
//     console.log(this.username);
// }

// code()

// const chai = function () {
//     let username = "Mihir"
//     console.log(this.username);
// }

const code =  () => {
    let username = "Mihir"
    console.log(this);
}


// code()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "Mihir"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()