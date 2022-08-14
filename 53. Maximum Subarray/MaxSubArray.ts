const maxSubArray = (nums: number[]): number => {

    let max = -9999999;
    let max_now = 0;

 
    for (let i = 0; i < nums.length; i++) {

        max_now += nums[i];

        if (max < max_now) {
            max = max_now;
        }
        if (max_now < 0) {
            max_now = 0
        }


    }
    return max;
};



export default maxSubArray;