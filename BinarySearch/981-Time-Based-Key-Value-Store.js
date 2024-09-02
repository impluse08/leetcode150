class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key,[])
        }
        this.keyStore.get(key).push([timestamp, value])
    }
    get(key, timestamp) {
        if(!this.keyStore.has(key)){
            return ""
        }
        let values = this.keyStore.get(key) || []
        let left = 0;
        let right = values.length - 1
        let result = ''
        while(left <= right){
            let mid = Math.floor((right + left) / 2)
            if(values[mid][0] <= timestamp){
                result = values[mid][1]
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
        return result
    }
}
