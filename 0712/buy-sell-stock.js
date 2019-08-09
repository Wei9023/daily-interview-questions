//Best time to buy and sell stock
//Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

const maxProfit = (prices)=>{
    let min = Number.MAX_SAFE_INTEGER;
    let max = 0;
    for(let i = 0; i<prices.length; i++){
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i]- min);
    }
    return max;
}