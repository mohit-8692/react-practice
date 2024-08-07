let arr = ['a','b','c'];

let obj = arr.reduce((a,it)=>({...a,it:it}),{})
