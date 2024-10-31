//Declare firstName, lastName, country, city, age, isMarried, year \n variable and assign value to it and use the typeof operator to check different data types. 
let firstName = 'Jorge'
let lastName = 'Bustos'
let Country = 'Mexico'
let City = 'Playa del Carmen'
let Age = 19
let isMarried = false
let Year = 2023

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(Country))
console.log(typeof(Country))
console.log(typeof(City))
console.log(typeof(Age))
console.log(typeof(isMarried))
console.log(typeof(Year))

//Check if type of '10' is equal to 10 
console.log(typeof'10'=== 10)//false

//Check if parseInt('9.8') is equal to 10 
console.log(parseInt('9.8')=== 10)// false

//Boolean value is either true or false. 
//TRUE
console.log(Boolean(12))
console.log(Boolean("hellor word"))
console.log(Boolean(true))

//False
console.log(Boolean(0))
console.log(Boolean(null))
console.log(Boolean(NaN))


//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()                 

                //mi resultado

console.log(4 > 3) //true
console.log(4 >= 3)//true
console.log(4 < 3)//false
console.log(4 <= 3 )//false
console.log(4 == 4 )//true
console.log(4 === 4 )//true
console.log(4 != 4 )//false
console.log(4 !== 4) //true*
console.log(4 != '4') //false
console.log(4 == '4')//false*
console.log(4 === '4')//false

/*Use the Date object to do the following activities 
What is the year today? 
What is the month today as a number? 
What is the date today? 
What day is today as a number? 
What are the hours now? 
What are the minutes now? 
Find out the numbers of seconds elapsed from January 1, 1970, to now. 
*/

const today =new Date()

//What is the year today? 
console.log('What is the year today?\n el año es:',today.getFullYear())

//What is the month today as a number? 
console.log('What is the month today as a number?\n el numero del mes es:',today.getMonth()+1)

//What is the date today? 
console.log('What is the date today?\nla fecha de hoy es:',today.getDate())

//What day is today as a number? 
console.log('What day is today as a number? \n el numero del dia de hoy es:',today.getDay())

//What are the hours now? 
console.log('What are the hours now? \n la hora de ahorita es:',today.getHours())

//What are the minutes now? 
console.log('What are the minutes now? \n los minutos de ahorita son:',today.getMinutes())

//Find out the numbers of seconds elapsed from January 1, 1970, to now. 
console.log("Los segundos desde el 1 de enero de 1970 hasta ahorita son :", Math.floor(Date.now() / 1000))

/*Write a script that prompts the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). 
Enter base: 20 
Enter height: 10 
The area of the triangle is 100 
*/

let base = prompt('Escribe el la base del triangulo:')
let height = prompt('Escriben la altura del triangulo')
let area = 0.5 * base*height
console.log(`El are del triangulo es:${area}`)

/*Write a script that prompts the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c) 
Enter side a: 5 
Enter side b: 4 
Enter side c: 3 
The perimeter of the triangle is 12 
*/
let side_a =parseFloat(prompt('Escribe el valor del lado a del triangulo:'))
let side_b = parseFloat(prompt('Escribe el valor del lado b del triangulo:'))
let side_c = parseFloat(prompt('Escribe el valor del lado c del triangulo: '))
let perimetro = side_a + side_b + side_c
console.log(`El perimetro del triangulo es:${perimetro}`)