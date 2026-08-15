const pointer = document.getElementById("pointer");
const spinBtn = document.getElementById("spinBtn");
const hint = document.getElementById("hint");
const result = document.getElementById("result");
const againBtn = document.getElementById("againBtn");

let spinning = false;

function spin() {
  if (spinning) return;
  spinning = true;
  spinBtn.disabled = true;
  hint.textContent = "calculating... very important calculations...";

  // The pointer itself rotates around its center pivot.
  // It begins at 0deg (YES) and always finishes at 0deg (YES).
  const turns = 6 + Math.floor(Math.random() * 3); // 6–8 full turns
  pointer.style.transition =
    `transform ${3.2 + turns * 0.12}s cubic-bezier(.12,.72,.16,1)`;
  pointer.style.transform = `rotate(${turns * 360}deg)`;

  setTimeout(() => {
    result.hidden = false;
    hint.textContent = "wow. what are the odds? ♡";
    spinBtn.style.display = "none";
    spinning = false;
  }, 3600);
}

function reset() {
  result.hidden = true;
  pointer.style.transition = "none";
  pointer.style.transform = "rotate(0deg)";
  void pointer.offsetWidth;
  spinBtn.style.display = "";
  spinBtn.disabled = false;
  hint.textContent = "go on, it's totally random";
}

spinBtn.addEventListener("click", spin);
againBtn.addEventListener("click", reset);
