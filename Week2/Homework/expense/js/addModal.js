import { CATEGORY, PAYMENT } from "./constants.js";

// 새로운 항목 추가
export function addData(expenseData) {
  const type = document.getElementById("add-type").value;
  const amountType = Number(document.getElementById("add-amount").value);

  const addItem = {
    id: Date.now(),
    title: document.getElementById("add-title").value,
    amount: type === "income" ? amountType : -amountType,
    date: document.getElementById("add-date").value,
    category: CATEGORY[document.getElementById("add-category").value],
    payment: PAYMENT[document.getElementById("add-payment").value],
  };

  const addedData = [...expenseData, addItem];
  localStorage.setItem("expenseData", JSON.stringify(addedData));
  return addedData;
}
