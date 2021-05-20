// Complicated logic?

/*
const partition=function(start,end){
    let mid=Math.floor((start+end)/2);
    return mid;
}
const searchInsert = function(nums, target){
    var left=0;
    var right=nums.length;
    var index=partition(left,right);
    while(left<=right){
        if(nums[index]===target) return index;
        else if(nums[index]<target){
            left=index+1;
            index=partition(left,right);
        }else{
            right=index-1;
            index=partition(left,right);
        }
    }
    return right+1;//as when it jumps out of the loop, right<left
}
*/