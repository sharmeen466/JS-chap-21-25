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