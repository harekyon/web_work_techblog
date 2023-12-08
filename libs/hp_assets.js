export function errorPop(errorText) {
  const errorPopWrap = document.getElementById("jsErrorPopWrap");
  const calcLength = errorPopWrap.children.length + 1;
  errorPopWrap.insertAdjacentHTML(
    "beforeend",
    `
        <p class="errorUnit" id="error${calcLength}" style=""><span style="font-weight:700;padding-bottom:4px;">ERROR</span><br/>${errorText}</p>
    `
  );
  // errorPopWrap.classList.add("errorPopAnim");
  const errorUnit = document.getElementById(`error${calcLength}`);
  // errorUnit.classList.add("errorPopAnim");
  setTimeout(() => {
    errorUnit.classList.add("errorPopAnim");
  }, 200);
  setTimeout(() => {
    errorUnit.classList.remove("errorPopAnim");
  }, 4500);
  setTimeout(() => {
    document.getElementById("jsErrorPopWrap").children[0].remove();
  }, 5000);
}
