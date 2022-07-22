// // 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다.
// // 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라
// // 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

// // 제한사항
// // nums에 들어있는 숫자의 개수는 3개 이상 50개 이하입니다.
// // nums의 각 원소는 1 이상 1,000 이하의 자연수이며, 중복된 숫자가 들어있지 않습니다.

// // nums에 있는 숫자들 중 서로 다른 3개를 고르기
// const arr = [];
// const nums = [1, 2, 4, 7];

// function solution() {
//   for (let i = 0; i < 3; i += 1) {
//     const idx = Math.floor(Math.random() * nums.length);
//     if (arr.indexOf(nums[idx]) === -1) {
//       arr.push(nums[idx]);
//     } else {
//       i -= 1;
//     }
//   }
//   console.log(arr);

//   // 더했을 때
//   const res = arr.reduce((sum, value) => sum + value, 0);
//   console.log(res);

//   // 소수인지 확인
//   function isPrime(a) {
//     for (let i = 2; i < a; i += 1) {
//       if (a % i === 0) {
//         return false;
//       }
//     }
//     a = res;
//   }
//   console.log(isPrime(res));
// }

// // 소수가 되는 경우의 개수
// solution();
