function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  //ES2015 Version

  const filterOutOdds=(...args)=>args.filter(val=>val%2===0);
=====================================================================

const findMin= (...arg)=>Math.min(...args)
=====================================================================
const mergeObjects=(obj1,obj2)=> ({...obj1, ...obj2})
=====================================================================
const doubleAndReturnArgs=(arr,...args)=>[...arr,...args.map(v=>v*2)]
=====================================================================
const newArr=(arr1,arr2)=>{
    return [...arr1,...arr2];
}
=====================================================================
const addKeyVal=(Object,KeyboardEvent,val)=>
let newObj={...Object}
newObj[key]=val;
return newObj;
=====================================================================
const removeKey=(obj, key)=>{
    let newObj={...obj}
    delete newObj[key]
    return newObj;
}
=====================================================================
const mod=(Object, KeyboardEvent, value)
let newObj={...Object}
newObj[key]=val;
=====================================================================
const fuse= (obj1, obj2)=>{
    return {...obj1, ...obj2};
}





