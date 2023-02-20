let harryPotterHealth = 100
let voldermortHealth = 150

let stringHealth = String(harryPotterHealth)
let stringHealth2 = '' + harryPotterHealth

// console.log(stringHealth)
// console.log(harryPotterHealth)
// console.log(stringHealth2)

let theWinnerIs = 'Voldermort has won, for today.'

let theTrueWinner = theWinnerIs.replace('Voldermort', 'Harry Potter')
let isHarryFoundInThisString = theTrueWinner.includes('Harry')
let lowerStatement = theTrueWinner.toLocaleLowerCase()
let kebab1 = lowerStatement.replaceAll(' ', '-')
kebab1 = kebab1.replaceAll('.', '')
kebab1 = kebab1.replaceAll(',', '')

// console.log(kebab1)

let kebab2 = lowerStatement.split(' ')
kebab2 = kebab2.join('-')
kebab2 = kebab2.replaceAll('.', '')
kebab2 = kebab2.replaceAll(',', '')

// console.log(kebab2)


function isPersonAlive(hP){
    if(hP > 0){
        return true
    }else{
        return false
    }
}

// simulates a voldermort attack on harry
// voldermorts attact will be a random number between 30 and 100
// it returns Harry's health after voldermort's attack
function voldermortAttack(harryHealth){
    return harryHealth - Math.floor(Math.random() * 71 + 30)
}

harryPotterHealth = voldermortAttack(harryPotterHealth)
harryPotterHealth = voldermortAttack(harryPotterHealth)
let aliveNow = isPersonAlive(harryPotterHealth)

console.log(aliveNow)
console.log(harryPotterHealth)