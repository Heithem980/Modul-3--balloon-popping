const allBalloons = document.querySelector(".wrapper");
const balloon = document.querySelectorAll(".balloon");

// For each balloon, add eventListener
balloon.forEach((event) => {
  event.addEventListener("mouseover", (e) => {
    e.target.classList.add("popped");

    const poppedCount = document.querySelectorAll(".popped").length;

    // if total balloons with class "popped" equals 24, display "YAY!"
    if (poppedCount === 24) {
      allBalloons.innerHTML = "";

      const h1 = document.createElement("h1");
      h1.textContent = "YAY!";
      h1.classList.add("afterText");
      allBalloons.appendChild(h1);
    }
  });
});
