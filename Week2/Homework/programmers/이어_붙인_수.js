// forEach
function solution(num_list) {
  let odd = "";
  let even = "";
  num_list.forEach(function (number) {
    // js는 자동으로 문자열 변환
    number % 2 == 0 ? (even += number) : (odd += number);
  });
  return Number(even) + Number(odd);
}

// reduce
function solution(num_list) {
  const { odd, even } = num_list.reduce(
    (acc, num) => {
      num % 2 == 0 ? (acc.even += num) : (acc.odd += num);
      return acc;
    },
    { even: "", odd: "" },
  );
  return Number(even) + Number(odd);
}
