let formEl = document.querySelector('form')
let incomeBtn = document.querySelector('#addIncomeBtn')
let expenseBtn = document.querySelector('#addExpenseBtn')
let balanceBtn = document.querySelector('#balanceBtn')
let nameInputEl = document.querySelector('#nameInputEl')
let addAmountEl = document.querySelector('#addAmountInputEl')
let viewBalance = document.querySelector('#myBalance')
let resetMyAccount = document.querySelector('#resetBtn')



// Skapa en function som sparar arrayen 'bank' till localstorage
    // convertera med json stringify
    // sparar skicka till localstorage

// skapa en function som lägger till ett obj till arrayen 'bank'




let bank = [
    {
    customerId:1,
    fName: 'Fadil',
    lName: 'Al',
    city: 'Uppsala',
    incomes: 0,
    savings: 0,
    expenses: 0
    },
    {
    customerId:2,
    fName: 'Eyad',
    lName: 'Al',
    city: 'Kristianstad',
    incomes: 0,
    savings: 0,
    expenses: 0
    },
    {
    customerId:3,
    fName: 'Abdullah',
    lName: 'Al',
    city: 'Kristianstad',
    incomes: 0,
    savings: 0,
    expenses: 0
    },
    {
    customerId:4,
    fName: 'Mohammed',
    lName: 'Al',
    city: 'Kristianstad',
    incomes: 0,
    savings: 0,
    expenses: 0
    },
]

// Event handler
incomeBtn.addEventListener('click', addIncome)
expenseBtn.addEventListener('click', addExpense)
balanceBtn.addEventListener('click', balance)
resetBtn.addEventListener('click', resetAccount)

// globalVariables
let btnClicked = null

function findIndex(name){
    return bank.findIndex(customer => customer.fName == name)
}
function validate(currentBtn){

    let name = nameInputEl.value
    let amount = Number(addAmountEl.value)

    let user = findIndex(name)
    if(name != '' && amount != '' && currentBtn != 'balance') {

        switch (currentBtn) {

            case 'addIncome':
                bank[user].incomes += amount
                break;
        
            case 'addExpense':
                bank[user].expenses += amount
                break;
            default:
                console.log('Something went wrong!')
                break;
        }
        // Add amount to you account
    }else if(name != '') {
                let total = bank[user].incomes - bank[user].expenses
                let balanceEl = document.createElement('h2')
                balanceEl.innerText = `Your total balance is $${total}`
                viewBalance.appendChild(balanceEl)   

    }
    else{
        let msg = document.createElement('h3')
        msg.innerText = 'You need to put som credentials'
        viewBalance.appendChild(msg)
    }
}


function addIncome(){
    btnClicked = 'addIncome'
    viewBalance.innerHTML = ''
    validate(btnClicked)
}

function addExpense(){
    btnClicked = 'addExpense'
    viewBalance.innerHTML = '' 
    validate(btnClicked)
     // Discharge Your account
}


function balance() {    
    btnClicked = 'balance'
    viewBalance.innerHTML = ''
    // Calc the total of your account
    validate(btnClicked)
}

function resetAccount () {
    viewBalance.innerHTML = ''
  // Calc the total of your account
    let name = nameInputEl.value
    let user = findIndex(name)

    bank[user].incomes = 0
    bank[user].expenses = 0

    let resetMsg = document.createElement('h3')
    resetMsg.innerText = 'Your Account Is now Reset'
    viewBalance.appendChild(resetMsg)

}

