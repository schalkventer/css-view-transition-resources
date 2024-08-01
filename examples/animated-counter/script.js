const subtract = document.querySelector("#subtract");
const value = document.querySelector("#value");
const add = document.querySelector("#add");

const animate = (callback) => {
  if (!document.startViewTransition) return callback();
  document.startViewTransition(callback);
};

const update = (amount) => {
  const isReversed = value.classList.contains("reverse");
  if (!isReversed && amount < 0) value.classList.add("reverse");
  if (isReversed && amount >= 0) value.classList.remove("reverse");
  const current = parseInt(value.innerText);

  animate(() => {
    value.innerText = (current + amount).toString();
  });
};

subtract.addEventListener("click", () => update(-1));
add.addEventListener("click", () => update(1));