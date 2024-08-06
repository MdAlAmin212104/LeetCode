var maximumWealth = function(accounts) {
    let max = 0;
    accounts.map(e => {
        let sum = e.reduce((x, y) => {
            return x + y
        }, 0)
        if(sum > max){
            max = sum;
        }
    })
    return max;
};