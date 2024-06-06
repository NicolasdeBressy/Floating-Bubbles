const counterDisplay = document.querySelector("h3");
let counter = 0;

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.setProperty("--left", Math.random() * 100 + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;

    // Appeler la fonction ring avec "z" comme argument pour jouer "z.mp3"
    ring("z");

    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 3000);
