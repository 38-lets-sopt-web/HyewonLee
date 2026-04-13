// 2. 뼈대 만들기(HTMl 요소 가져오기)
const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// 할 일 목록 배열(전역 변수)
let todos = [];

// 3. 버튼 클릭 이벤트
button.addEventListener("click", () => {
  // input 받아서 text에 저장하고
  const text = input.value;
  if (text === "") return;

  // 리스트에 추가하고 보여주기
  const li = document.createElement("li");
  li.innerText = text;
  todoList.appendChild(li);

  // 4. localStorage에 저장
  todos.push(text);
  // 배열을 문자열로 저장
  localStorage.setItem("todos", JSON.stringify(todos));

  // 입력창 비우기
  input.value = "";
});

// 5. localStorage에서 불러오기
const saved = localStorage.getItem("todos");
// 저장된 게 있으면 가져오기
if (saved) {
  todos = JSON.parse(saved);
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerText = todo;
    todoList.appendChild(li);
  });
}
