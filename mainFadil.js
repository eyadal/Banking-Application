let formEl = document.querySelector('form')
let incomeBtn = document.querySelector('#addIncomeBtn')
let expenseBtn = document.querySelector('#addExpenseBtn')
let balanceBtn = document.querySelector('#balanceBtn')
let nameInputEl = document.querySelector('#nameInputEl')
let addAmountEl = document.querySelector('#addAmountInputEl')
let viewBalance = document.querySelector('#myBalance')
let resetAccBtn = document.querySelector('#resetAccBtn')





let bank = [
    {
    customerId:1,
    fName: 'Fadil',
    lName: 'Al',
    city: 'Uppsala',
    incomes: 100,
    savings: 0,
    expenses: 0
    },
    {
    customerId:2,
    fName: 'Eyad',
    lName: 'Al',
    city: 'Kristianstad',
    incomes: 100,
    savings: 0,
    expenses: 0
    },
    {
    customerId:3,
    fName: 'Abdullah',
    lName: 'Al',
    city: 'Kristianstad',
    incomes: 100,
    savings: 0,
    expenses: 0
    },
    {
    customerId:4,
    fName: 'Mohammed',
    lName: 'Al',
    city: 'Kristianstad',
    incomes: 100,
    savings: 0,
    expenses: 0
    },
]

// Event handler
incomeBtn.addEventListener('click', addIncome)
expenseBtn.addEventListener('click', addExpense)
balanceBtn.addEventListener('click', balance)
resetAccBtn.addEventListener('click', resetAccount)

function findIndex(name){
    return bank.findIndex(customer => customer.fName == name)
}

function addIncome(){
    let name = nameInputEl.value
    let amount = Number(addAmountEl.value)

    let user = findIndex(name)
    bank[user].incomes += amount
    // Add amount to you account
    console.log(name, amount)
}

function addExpense(){
    // Discharge Your account
    let name = nameInputEl.value
    let amount = Number(addAmountEl.value)

    let user = findIndex(name)
    bank[user].expenses += amount
    // Add amount to you account
    console.log(name, amount)

}


function balance() {
    viewBalance.innerText =''
    // Calc the total of your account
    let name = nameInputEl.value
    let user = findIndex(name)

    if(name == '') {
        let balanceEl = document.createElement('p')
        balanceEl.innerText = `The name input is empty. Type something and try agin.` 
        viewBalance.appendChild(balanceEl)
    } else if(user>-1){
        let total = bank[user].incomes - bank[user].expenses
    
        let balanceEl = document.createElement('h1')
        balanceEl.innerText = `Your total balance is $${total} ` 
        viewBalance.appendChild(balanceEl)
    } else {
        alert(`"${name}" not found, it may be wrong credentials! Try type the name agin!`)    
    }

   

}

function resetAccount () {
       // Calc the total of your account
    let name = nameInputEl.value
    let user = findIndex(name)
    
    if(user>-1){
        bank[user].incomes = 0
        bank[user].expenses = 0
        
        alert(`${bank[user].fName}, your account is now reset!`)    
        }else {
        alert(`${name} not found!`)    

        }
    
}