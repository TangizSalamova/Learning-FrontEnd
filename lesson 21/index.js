const result = document.querySelector("#result");
const inp = document.querySelector("#number");
const btn = document.querySelector("#onclick");

var sum = (start, topla) => {
  return start == 0 ? topla : sum(start - 1, topla + start);
};
btn.addEventListener("click", () => {
  result.innerHTML = sum(Number(inp.value), 0);
  inp.value = result.innerHTML;
});