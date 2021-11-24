const pausePlayBtn = document.querySelector(".pause-play"),
  resetBtn = document.querySelector(".reset");

const bloom = document.querySelector(".bloom"),
  flora = document.querySelector(".flora"),
  musa = document.querySelector(".musa");

const toggle = () => {
  if (pausePlayBtn.textContent === "Пауза") {
    pausePlayBtn.textContent = "Продолжить";
    cancelAnimationFrame(flyInterval);
  } else {
    pausePlayBtn.textContent = "Пауза";
    flyInterval = requestAnimationFrame(flyAnimate);
  }
};

let count = 0,
  flyInterval;

const flyAnimate = function () {
  flyInterval = requestAnimationFrame(flyAnimate);
  count++;
  if (count === 1200) {
    cancelAnimationFrame(flyInterval);
  }
  flora.style.top = -count / 12 + "px";
  flora.style.left = count / 3 + "px";
  if (count < 750) {
    bloom.style.top = count / 10 + "px";
    bloom.style.left = count / 5 + "px";
    musa.style.top = -50 - count / 10 + "px";
    musa.style.left = 400 - count / 3 + "px";
  } else if (count === 750) {
    bloom.style.transition = `4s`;
    bloom.style.transform = `rotate(-450deg)`;
    musa.style.transition = `4s`;
    musa.style.transform = `rotate(-450deg)`;
  } else if (count > 750) {
    bloom.style.top = count / -20 + "px";
    bloom.style.left = count / 2 + "px";
    musa.style.top = -50 - count / -20 + "px";
    musa.style.left = 400 - count / 2 + "px";
  }
};

flyInterval = requestAnimationFrame(flyAnimate);

pausePlayBtn.addEventListener("click", toggle);
resetBtn.addEventListener("click", () => (count = 0));
