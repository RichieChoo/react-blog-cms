/**
 * Created by Richie on 2018/4/17
 */
/**
 * Created by Richie on 2018/4/17
 */
export function getMap(obj,add) {

    let arr =[];
    for(let i in obj){
        let test={};
        test.val=i;
        test.name=obj[i];
        arr.push(test)
    }
    if(add){
        arr.unshift(add)
    }
    return arr;
}

export function getVal(obj,key) {
    for(let i in obj){
        if(key===i){
            return obj[i];
        }
    }
}


export function getValArr(arr,key) {
    let test;
    for(let i=0;i<arr.length;i++){
        if(arr[i].val===key){
            test = arr[i].name;
        }
    }
    return test;
}
