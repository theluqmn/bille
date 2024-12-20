function calculateBill(usage, provider, country) {
    let data = require('./data.json')
    let total = 0

    let rates = data[country].providers[provider].rates

    // Loop through rates to calculate total
    for (let i = 0; i < rates.length; i++) {
        let min = rates[i].range[0]
        let max = rates[i].range[1] 
        let rate = rates[i].rate

        // Calculate usage within this rate bracket
        let unitsInBracket = 0
        
        if (usage > min) {
            // If usage exceeds max, only count units up to max
            unitsInBracket = Math.min(usage, max) - min
            total += unitsInBracket * rate
        }

        console.log(total)
    }

    return total
}

console.log(calculateBill(1000, 'tnb', 'malaysia'))