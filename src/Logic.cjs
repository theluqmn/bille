import data from './data.json' assert { type: 'json' };

export function calculateBill(usage, country, provider) {
    console.log(usage, country, provider);
    if (!data[country] || !data[country].providers || !data[country].providers[provider]) {
        throw new Error(`Invalid country (${country}) or provider (${provider}) combination`);
    }

    let total = 0;
    let serviceCharge = 0;

    let rates = data[country].providers[provider].rates;
    let service = data[country].providers[provider].charges.service;

    // Calculate the total bill
    for (let i = 0; i < rates.length; i++) {
        let min = rates[i].range[0];
        let max = rates[i].range[1];
        let rate = rates[i].rate;

        if (usage > min) {
            let increment = 0;
            if (usage >= min && usage <= max) {
                increment = ((usage - min) * rate);
            } else if (usage > max) {
                increment = ((max - min) * rate);
            }
            total += increment;
        }
    }

    // Calculate the service charge
    if (usage > 600) {
        usage -= 600;

        for (let i = 0; i < rates.length; i++) {
            let min = rates[i].range[0];
            let max = rates[i].range[1];
            let rate = rates[i].rate;
    
            let increment = 0;
    
            if (usage >= min && usage <= max) {
                increment += ((usage - min) * rate) * service;
            } else {
                increment += ((max - min) * rate) * service;
            }
    
            serviceCharge += increment;
        }
    }

    return {
        bill: total,
        service: serviceCharge,
        total: total + serviceCharge
    };
}