import "./data.js";
import { renderTable } from "./table.js";
import "./filter.js";
import { filterData } from "./filter.js";

const expenseData = JSON.parse(localStorage.getItem("expenseData")) || [];

// 화면에 테이블 렌더링
renderTable(expenseData);

// filter-form 읽어오기
const form = document.getElementById("filter-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const filters = {
    title: document.getElementById("search-title").value,
    type: document.getElementById("search-type").value,
    category: document.getElementById("search-category").value,
    payment: document.getElementById("search-payment").value,
  };

  // 필터링한 거 렌더링
  const filteredData = filterData(expenseData, filters);
  renderTable(filteredData);
});
