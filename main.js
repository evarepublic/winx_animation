const bloom = document.querySelector(".bloom"),
  flora = document.querySelector(".flora"),
  musa = document.querySelector(".musa");

let count = 0,
  step = 0;

const flyAnimate = function () {
  count++;
  if (count === 1500) {
    clearInterval(idInterval);
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

let idInterval = setInterval(flyAnimate, 10);
