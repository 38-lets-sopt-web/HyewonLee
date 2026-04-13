// reduce를 사용해서 합과 곱으로 압축
function solution(num_list) {
  var answer = 0;
  if (num_list.length > 10) {
    answer = num_list.reduce((acc, num) => acc + num, 0);
  } else {
    answer = num_list.reduce((acc, num) => acc * num, 1);
  }
  return answer;
}

// reduce 중복 제거(삼항연산자 사용)
function solution(num_list) {
  var answer = 0;
  const isLong = num_list.length > 10;

  answer = num_list.reduce((acc, num) => (isLong ? acc + num : acc * num), isLong ? 0 : 1);
  return answer;
}
