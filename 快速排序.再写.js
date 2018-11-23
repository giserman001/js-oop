let tools = {
    checkArrayType(data, methodName){
        if(data instanceof Array){
            return true;
        }else{
            throw {
                name:'TypeRrror',
                message:`method ${methodName} require an Array as argument`
            }
        }
    },
    swap(arr,index01,index02){
        [arr[index01], arr[index02]] = [arr[index02], arr[index01]];
    },
    sortByQuick(sourceArr){
        // 设置return条件   数组长度<=1;
        // 1、拆分任务
        //              选取一个坐标做中间值
        //              比它小的放左边
        //              比它大的放右边
        // 2、递归调用  得出各组结果
        // 3、连接各组结果
        let passTypeCheck = this.checkArrayType(sourceArr, 'sortByQuick');
        if(!passTypeCheck){ return ; }
        if(sourceArr.length <= 1){
            return sourceArr;
        }
        // 中间值
        let pointValue = sourceArr.splice(0,1)[0];
        let left = [];
        let right = [];
        for(let i=0,len=sourceArr.length; i<len; i++){
            if(sourceArr[i] < pointValue){
                left.push(sourceArr[i]);
            }else{
                right.push(sourceArr[i]);
            }
        }
        return this.sortByQuick(left).concat([pointValue], this.sortByQuick(right));
    }
}

console.log(tools.sortByQuick([1,123,312,23,32]));