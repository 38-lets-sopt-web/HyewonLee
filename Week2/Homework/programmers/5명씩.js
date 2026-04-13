function solution(names) {
  var answer = [];
  for (let i = 0; i < names.length; i++) {
    if (i % 5 == 0) {
      answer.push(names[i]);
    }
  }
  return answer;
}

//refactor: filter 사용해서 조건 필터링
function solution(names) {
  var answer = [];
  answer = names.filter((_, i) => i % 5 === 0);
  return answer;
}
