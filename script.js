let myAge = 18
console.log(myAge)


let myName = 'Dan'
console.log(myName)

let isStudent = 'Student'
if(isStudent  === 'Student'){
    console.log("true")
}
else{
    console.log("false")
}

let myString = 'Навчання ніколи не вичерпує розум. Леонардо да Вінчі'
console.log(myString)

let myNumber = 20
let myNumbersecond = 10
let numberResult = myNumber + myNumbersecond
console.log(numberResult)

let myNull = 'null'
console.log(myNull)

let yourName = prompt('Твоє ім`я?')
if(yourName){
    alert('Привіт, ' + yourName)
}
let myConfirmation = confirm('Підтвердіть вашу дію!')
if(myConfirmation){
    alert('Дякую за підтвердження!')
}
else{
    alert('Дію відмінено!')
}
let dangerAction = confirm('Цей сайт може бути небезпечним! Будь ласка підтвердіть вашу дію!')
if(dangerAction){
    alert('Дякую за підтвердження!')
}
else{
    alert('Дію відмінено!')
}