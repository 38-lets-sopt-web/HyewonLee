// 선택 항목 삭제
export function selectDelItems(expenseData, rowIds) {
  return expenseData.filter((item) => !rowIds.includes(item.id));
}
