// table.js: 테이블 렌더링
export function renderTable(expenseData) {
  const tbody = document.querySelector("tbody");
  // 재렌더링 시 중복되지 않도록 초기화
  tbody.innerHTML = "";

  // localStorage 초기화 시 안내 메시지
  if (expenseData.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="6" class = "empty-message">내역이 없습니다.</td>`;
    tbody.appendChild(row);
    renderTotal(expenseData);
    return;
  }

  expenseData.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td><input type="checkbox" class="row-check" data-id="${item.id}" /></td>
    <td class="title" data-id="${item.id}">${item.title}</td>
    <td class='${item.amount > 0 ? "td-income" : "td-expense"}'>${formatAmount(item.amount)}</td>
    <td>${item.date}</td>
    <td>${item.category}</td>
    <td>${item.payment}</td>
  `;

    tbody.appendChild(row);
  });
  // total값 업데이트
  renderTotal(expenseData);
}

// 문자열로 반환
function formatAmount(amount) {
  const formatted = amount.toLocaleString("ko-KR");
  if (amount > 0) return `+${formatted}`;
  if (amount < 0) return `${formatted}`;
  else return 0;
}

function calculateTotal(expenseData) {
  const total = expenseData.reduce((acc, item) => acc + item.amount, 0);
  return total;
}

function renderTotal(expenseData) {
  // total이라는 요소 가져오고
  const totalEl = document.getElementById("total");
  // 계산한 후
  const total = calculateTotal(expenseData);
  // 클래스 붙이기 전에 누적 방지하기 위해서 클래스 삭제
  totalEl.classList.remove("td-income", "td-expense");

  if (total > 0) {
    totalEl.classList.add("td-income");
  } else if (total < 0) {
    totalEl.classList.add("td-expense");
  }
  // 값을 totalEl에 넣어줌
  totalEl.textContent = formatAmount(total);
}
