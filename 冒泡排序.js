let tools = {
    sortByBubble(sourceArr){
        if(!(sourceArr instanceof Array)){
            throw {
                name:'TypeError',
                message:'sortByBubble required Array',
            }
        };
        let len = sourceArr.length;
        for(let i=0; i<len; i++){
            for(let j=i+1; j<len ; j++){
                if(sourceArr[i]>sourceArr[j]){
                    sourceArr[i] = sourceArr[i] + sourceArr[j];
                    sourceArr[j] = sourceArr[i] - sourceArr[j];
                    sourceArr[i] = sourceArr[i] - sourceArr[j];
                }
            }
        }
        console.log(sourceArr);
        return sourceArr;
    }
}


tools.sortByBubble([9,2,3,1,5,8,6,7,2,11,20,51,12]);