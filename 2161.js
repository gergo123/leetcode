/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    const left =[], right = [], mid = [];

    for(let num of nums){
        if(num<pivot) left.push(num);
        else if(num===pivot) mid.push(pivot);
        else right.push(num);
    }

    return [...left,...mid,...right];

    // modifying the original array? in-place solution?
    // in place vs not inplace algo
    // ordering algorithms?
    //
    // with pointers?
    // bal jobb, kell-e csere pivottol fuggoen
    // const left=0, right=0;
    // while(left !== nums.length) {
    //     const leftNum = nums[left], rightNum = nums[right];
    //     if(leftNum>pivot){

    //     }
    // }
    
    // rekurziv megoldas van meg, divide conquer?
};

console.log(pivotArray([9,12,5,10,14,3,10],10), [9,5,3,10,10,12,14])
console.log(pivotArray([-3,4,3,2],2), [-3,2,4,3])
