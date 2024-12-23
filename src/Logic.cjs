import data from './data.json' assert { type: 'json' };

export function calculateBill(usage, country, provider) {
    if (!data[country] || !data[country].providers || !data[country].providers[provider]) {
        throw new Error(`Invalid country (${country}) or provider (${provider}) combination`);
    }

    let total = 0;
    let rates = data[country].providers[provider].rates;
    let service = data[country].providers[provider].charges.service;

    for (let i = 0; i < rates.length; i++) {
        let min = rates[i].range[0];
        let max = rates[i].range[1];
        let rate = rates[i].rate;

        if (min >= 600) {
            if (usage >= min && usage <= max) {
                total += ((usage - min) * rate) * service;
                break;
                
            } else {
                total += ((max - min) * rate) * service;
            }

        } else {
            if (usage >= min && usage <= max) {
                total += ((usage - min) * rate) * service;

            } else {
                total += ((max - min) * rate) * service;
            }
        }
    }

    return {
        bill: total,
        service: service,
        total: total + service
    };
}
