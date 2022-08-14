function maxProfit(prices: number[]): number {
    let maxProfit = 0;

    for (let i = 0, sell=1; sell < prices.length; sell++) {
        if(prices[i] < prices[sell]) {
            let profit = prices[sell] - prices[i];
            maxProfit = Math.max(maxProfit, profit);
        }else{
            i = sell;
        }
    }
    return maxProfit;
};

export default maxProfit;