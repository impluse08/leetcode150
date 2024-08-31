function binarySearch(low, high, target, piles) {
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let hoursTaken = calcuateHour(mid, piles);
        
        if (hoursTaken <= target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return low;
}

function calcuateHour(speed, piles) {
    let total = 0;
    for (let banana of piles) {
        total += Math.ceil(banana / speed);
    }
    return total;
}

var minEatingSpeed = function(piles, h) {
    const maxValue = Math.max(...piles);
    return binarySearch(1, maxValue, h, piles);
};
