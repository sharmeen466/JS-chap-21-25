//......................chap # 21-25..............................
//.......................STRING METHODS............................


//  Q   #   1

// let firstName = prompt("your 1st name ")
// let lastName = prompt("your last name ")

// let fullName = firstName + " " + lastName

// alert(fullName + " Welcome ")


//  Q   #   2

// let phone = prompt("what's your favorite mobile phone model?")


// document.write("My favorite phone is: "+ phone + "<br />")
// document.write("Length of string: "+ phone.length)


//  Q   #   3

// let string = "Pakistani"

// document.write ("String: "+ string + "<br />")
// document.write ("Index of 'n': "+ string.indexOf("n"))


//  Q   #   4

// let string = "Hello World"

// document.write ("String: "+ string + "<br />")
//  document.write ("Last Index of 'n': "+ string.lastIndexOf("l"))


//  Q   #   5

// let string = "Pakistani"

// document.write ("String: "+ string + "<br />")
// document.write ("Character at Index '3': "+ string.slice(3,4))


//  Q   #   6

// let firstName = prompt("your 1st name ")
// let lastName = prompt(" your last name ")


// alert (firstName.concat(lastName) + " Welcome")


//  Q   #   7

// let city = "hyderabad"
// let updatedCity =  city.replace("hyder", "Islam")

// document.write("city: " + city + "<br />" )
// document.write("Updated city: " + updatedCity + "<br />" )


//  Q   #   8


// let msg = "Ali and Sami are best friends. They play cricket and football together."

// document.write("Message: " + msg + "<br />")
// document.write("Update Message: " + msg.replace(/and/g, "&"))


//  Q   #   9


// let str = "472"
// document.write("Value: " +str + "<br />")
// document.write("Type: "+ typeof str + "<br />")

// document.write("<br />")

// str = +"472"
// document.write("Value: " +str + "<br />")
// document.write("Type: " + typeof str + "<br />")


//  Q   #   10


// let input = prompt("Enter any text")

// document.write("User Input: "+ input + "<br />")
// document.write("User Input in uppercase: "+ input.toUpperCase())


//  Q   #   11


// let userInput = prompt("Enter any text")

// document.write("User Input: "+ userInput + "<br />")
// document.write("User Input in title case: "+ userInput[0].toUpperCase() + userInput.slice(1))


//  Q   #   12

// let num = 35.36
// num = "35.36"
// let result = num.replace(".", "")

// document.write("Number: "+ num + "<br />")
// document.write("Result: "+ result + "<br />")


//  Q   #   13

// let userName = prompt("Enter your name")
// let charCode;

// for (let i = 0; i < userName.length; i++){
//     charCode = userName.charCodeAt(i);

//     if (charCode == 33 || charCode == 44 || charCode == 46 || charCode == 64){
//         alert("Please Enter a valid username")
//     }
// }


//  Q   #   14


// let arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// let search = prompt("Welcome to ABC bakery. what do you want to order sir/ ma'am?").toLowerCase();

// let flag = false

// for (let i = 0; i < arr.length; i++){
//     if (search == arr[i]){
//       flag = true
//     }
// }

// if (flag){
//     document.write(search + " is avalable at index "+ arr.indexOf(search) + " in our bakery")
// }
// else {
//     document.write("We are sorry. "+ search+ " is not available in our bakery")
// }


//  Q   #   15

// let pswrd = prompt("Enter a password at least 6 charactors")

// // checking length of pswrd
// if (pswrd.length <= 6) {
//     alert("Password must be atleast 6 charactors long")
// }


// // checking alph nd numbrs
// else if (!(/[a-zA-Z]/.test(pswrd) && /[0-9]/.test(pswrd))) {
//     alert("Password must be contain both alphabets and letter")
// }


// //checking the begining numbrs
// //48-57
// else if ((pswrd.charCodeAt(0) >= 48 && pswrd.charCodeAt(0) <= 57)) {
//     alert("Password cannot begin with a number")
// }

// else{
//     alert("please enter a valid password")
// }


//  Q   #   16

// let uni = "University of Karachi";

// let str = uni.split("", uni.length);
// // document.write(str )

// for(let i = 0; i < str.length; i++){
//     document.write(str[i] + "<br />")
// }


//  Q   #   17

// let userInput = "Pakistan"

// document.write("User Input: "+ userInput + "<br />")
// document.write("Last character of Input: "+ userInput.lastIndexOf("n") + "<br />")


//  Q   #   18

// let str = "The quick brown fox jumps over the lazy dog"
// let lowerCase = str.toLowerCase()
// let words = lowerCase.split(" ")
// let count = 0

// for (let i = 0; i < words.length; i++){
//     if (words[i] === "the"){
//         count++
//     }
// }
// document.write("Text: "+ str + "<br />")
// document.write("There are "+ count + " occurance(s) of 'the'")


//......................chap # 21-25 END..............................