// table.js: 테이블 렌더링
export function renderTable(expenseData) {
  const tbody = document.querySelector("tbody");
  // 재렌더링 시 중복되지 않도록 초기화
  tbody.innerHTML = "";

  expenseData.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td><input type="checkbox" class="row-check" data-id="${item.id}" /></td>
    <td>${item.title}</td>
    <td>${item.amount > 0 ? `+${item.amount}` : item.amount}</td>
    <td>${item.date}</td>
    <td>${item.category}</td>
    <td>${item.payment}</td>
  `;

    tbody.appendChild(row);
  });
  // total값 업데이트
  renderTotal(expenseData);
}

function calculateTotal(expenseData) {
  const total = expenseData.reduce((acc, item) => acc + item.amount, 0);
  // 금액 포맷팅
  return total > 0 ? `+${total}` : total < 0 ? `${total}` : `0`;
}

function renderTotal(expenseData) {
  // total이라는 요소 가져오고
  const totalEl = document.getElementById("total");
  // 계산한 후
  const total = calculateTotal(expenseData);
  // 값을 totalEl에 넣어줌
  totalEl.textContent = total;
}
