import "./app1.css";
import $ from "jquery";

const $button1 = $("#btn-add");
const $button2 = $("#btn-minus");
const $button3 = $("#btn-mul");
const $button4 = $("#btn-divide");
const $number = $("#number");
const n = localStorage.getItem("n");
$number.text(n || 100);

//尝试用事件委托优化重复
$button1.on("click", () => {
  let n = parseInt($number.text());
  n += 1;
  localStorage.setItem("n", n);
  $number.text(n);
});

$button2.on("click", () => {
  let n = parseInt($number.text());
  n -= 1;
  localStorage.setItem("n", n);
  $number.text(n);
});

$button3.on("click", () => {
  let n = parseInt($number.text());
  n *= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});

$button4.on("click", () => {
  let n = parseInt($number.text());
  n /= 2;
  localStorage.setItem("n", n);
  $number.text(n);
});
