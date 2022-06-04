let a =  ['one', 'two', 'three','four','five'];

let b = a.reduce((result,item)=>{

    return result[item.length] =  [...(result[item.length] || []), item], result; 
}
    
,{});

console.log(b);