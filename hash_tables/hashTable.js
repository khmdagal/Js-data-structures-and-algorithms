class HashTable{
    constructor(size = 7){
        this.dataMap = new Array(size)
    }
    _hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }

    set(key, value){
        let index = this._hash(key);
        if(!this.dataMap[index]){
            this.dataMap[index] = []
        }
        this.dataMap[index].push([key,value])
        return this
    }
    get(key){
        let index = this._hash(key);
        if(this.dataMap[index]){
            for(let i = 0; i < this.dataMap[index].length; i++){
                if(key === this.dataMap[index][i][0])
                    return this.dataMap[index][i][1]
            }
        }else{
            return undefined
        }
      
    }

    keys(){
        let keyArr =[]
        for(let i = 0; i < this.dataMap.length; i++){
            let currentIndex = this.dataMap[i]
        
            if(currentIndex){
                for(let j = 0; j < currentIndex.length; j++){

                    keyArr.push(currentIndex[j][0])
                }

            }
        }
        return keyArr
    }
}

const myHashTable = new HashTable()
myHashTable.set("khadar", 100);
myHashTable.set("Haroon", 90);
myHashTable.set("Ahmed", 80);
myHashTable.set("cyf10", 100);

//console.log(myHashTable.get("student"))
//console.log(myHashTable.get('khadar'))
console.log(myHashTable.keys())