import "./data.js";
import { renderTable } from "./table.js";

const expenseData = JSON.parse(localStorage.getItem("expenseData")) || [];

renderTable(expenseData);
