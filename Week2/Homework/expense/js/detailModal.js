export function detailData(item) {
  const detailContent = document.querySelector(".detail-content");

  detailContent.innerHTML = `
    <p>제목: ${item.title}</p>
    <p>금액: ${item.amount}원</p>
    <p>날짜: ${item.date}</p>
    <p>카테고리: ${item.category}</p>
    <p>결제수단: ${item.payment}</p>
  `;
}
