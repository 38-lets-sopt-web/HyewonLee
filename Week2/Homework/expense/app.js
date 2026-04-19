import { renderTable } from "./table.js";
import { filterData } from "./filter.js";
import { sortByDate } from "./sort.js";
import { selectDelItems } from "./action.js";
import { addData } from "./addModal.js";
import { detailData } from "./detailModal.js";

// reload
const reloadIcon = document.querySelector(".reload");
reloadIcon.addEventListener("click", (e) => {
  location.reload();
});

let expenseData = JSON.parse(localStorage.getItem("expenseData")) || [];

// 현재 화면에 있는 데이터
let currentData = sortByDate(expenseData, "date-descending");

// 화면에 테이블 렌더링
renderTable(currentData);

// filter-form 읽어오기
const filterForm = document.getElementById("filter-form");
// 필터링
filterForm.addEventListener("submit", (e) => {
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
filterForm.addEventListener("reset", () => {
  currentData = sortByDate(expenseData, sortEl.value);
  renderTable(currentData);
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

// 전체 체크박스로 선택 상태 바꾸기
const chkAll = document.getElementById("chkAll");
chkAll.addEventListener("change", (e) => {
  // 지금 상태 가져오기 (true, false)
  const checked = e.target.checked;
  // 아래 체크박스들 가져오기
  const rowChecks = document.querySelectorAll(".row-check");
  // 전부 상태 통일
  rowChecks.forEach((chk) => {
    chk.checked = checked;
  });
});

// 선택 항목 삭제 (button id로 접근)
const selectDelBtn = document.querySelector("#selectDelBtn");
selectDelBtn.addEventListener("click", () => {
  // check된 row 불러오기 (row class, data id로 접근)
  const checkedRow = document.querySelectorAll(".row-check:checked");
  // 배열로 바꿔서 row의 id들 저장
  const rowIds = Array.from(checkedRow).map((chk) => Number(chk.dataset.id));
  // checked된 id 제외한 새로운 데이터 생성
  const newData = selectDelItems(currentData, rowIds);
  localStorage.setItem("expenseData", JSON.stringify(newData));
  // 상태 업데이트
  currentData = newData;
  renderTable(newData);
});

// 내역 추가 모달
const addModal = document.querySelector("#add-modal");
const addBtn = document.querySelector("#addItem");
const closeAddBtn = document.querySelector("#closeAddModal");

// 모달 열기
addBtn.addEventListener("click", () => {
  addModal.style.display = "flex";
});

// 모달 닫기
closeAddBtn.addEventListener("click", () => {
  addModal.style.display = "none";
});

// add-form 읽어오기
const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // 하나라도 비어있으면 alert
  const title = document.getElementById("add-title").value;
  const amount = document.getElementById("add-amount").value;
  const date = document.getElementById("add-date").value;
  const category = document.getElementById("add-category").value;
  const payment = document.getElementById("add-payment").value;

  if (!title || !amount || !date || category === "select" || payment === "select") {
    alert("모든 항목을 입력해주세요!");
    return;
  }

  currentData = sortByDate(addData(expenseData), "date-descending");
  // expenseData 동기화 필요
  expenseData = currentData;
  renderTable(currentData);
  // 제출 후 모달 닫기
  addModal.style.display = "none";
  addForm.reset();
});

// 세부 내용 모달
const tbody = document.querySelector(".tbody-event");
const detailModal = document.querySelector("#detail-modal");
const closeDetailBtn = document.querySelector("#closeDetailModal");

// 모달 열기
tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("title")) {
    // 숫자로 변환해줘야 expenseData의 id와 비교 가능
    const id = Number(e.target.dataset.id);
    // HTML에서 찾지 말고 배열에서 가져오기
    const item = expenseData.find((item) => item.id === id);
    detailData(item);
    detailModal.style.display = "flex";
  }
});

// 모달 닫기
closeDetailBtn.addEventListener("click", () => {
  detailModal.style.display = "none";
});
