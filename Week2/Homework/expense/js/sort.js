// 날짜 정렬
export function sortByDate(expenseData, order) {
  return [...expenseData].sort((a, b) => {
    if (order === "date-ascending") {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });
}
