import { renderTable } from "./table.js";
import { filterData } from "./filter.js";
import { sortByDate } from "./sort.js";

const expenseData = JSON.parse(localStorage.getItem("expenseData")) || [];

// 현재 화면에 있는 데이터
let currentData = sortByDate(expenseData, "date-descending");

// 화면에 테이블 렌더링
renderTable(currentData);

// filter-form 읽어오기
const form = document.getElementById("filter-form");

// 필터링
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const filters = {
    title: document.getElementById("search-title").value,
    type: document.getElementById("search-type").value,
    category: document.getElementById("search-category").value,
    payment: document.getElementById("search-payment").value,
  };

  currentData = filterData(expenseData, filters);
  renderTable(currentData);
});

// 초기화
form.addEventListener("reset", () => {
  renderTable(expenseData);
});

// 정렬 읽어오기
const sortEl = document.getElementById("filter-date");

// 정렬
sortEl.addEventListener("change", (e) => {
  const order = e.target.value;
  // 현재 보여지는 데이터를 기준으로 정렬
  currentData = sortByDate(currentData, order);
  renderTable(currentData);
});
