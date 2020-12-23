// Deklarera variabler och initsierar dem

// let name = 'Fadil'
// let lName = 'Al'
// let age = 28
// let place = 'Uppsala'

// Skapar Function med argument som returnerar en templateString 

function personInfo(firstName, lastName, theAge, personLocation){
    let fullName = `${firstName} ${lastName}`
    return `My name is ${fullName}, I am ${theAge} years old and live in ${personLocation}.`
}

// skapar en hårdkodad person

// let person1 = personInfo('Dan', 'Zettergreen', 32, 'Enköping')
// let person2 = personInfo('Jan', 'Krill', 45, 'Jävle')
// let person3 = personInfo('Groll', 'Svensson', 25, 'Lidingö')





let person = [
    personInfo('Dan', 'Zettergreen', 32, 'Enköping'),
    personInfo('Jan', 'Krill', 45, 'Jävle'),
    personInfo('Groll', 'Svensson', 25, 'Lidingö')
]

for(let i = 1; i <= 3; i++) {
    
    // let name = prompt('Type your first Name: ')
    // let lName = prompt('Type your last name: ')
    // let age = Number(prompt('Type your age: '))
    // let city = prompt('Type your location: ')
    
    
    // person[i] = personInfo(name, lName, age, city)
    // console.log(person[i])
    console.log(name)

}
