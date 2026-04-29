export function detailData(item) {
  const detailContent = document.querySelector(".detail-content");

  detailContent.innerHTML = `
    <p>제목: <span class="detail-title"></span></p>
    <p>금액: ${item.amount}원</p>
    <p>날짜: ${item.date}</p>
    <p>카테고리: ${item.category}</p>
    <p>결제수단: ${item.payment}</p>
  `;

  detailContent.querySelector(".detail-title").textContent = item.title;
}
