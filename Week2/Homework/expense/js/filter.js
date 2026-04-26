import { CATEGORY, PAYMENT } from "./constants.js";

// 필터링
export function filterData(expenseData, filters) {
  return expenseData.filter((item) => {
    return (
      // 제목
      item.title.includes(filters.title) &&
      // 유형
      (filters.type === "all" ||
        (filters.type === "income" && item.amount > 0) ||
        (filters.type === "expense" && item.amount < 0)) &&
      // 카테고리
      (filters.category === "all" || item.category === CATEGORY[filters.category]) &&
      // 결제수단
      (filters.payment === "all" || item.payment === PAYMENT[filters.payment])
    );
  });
}
