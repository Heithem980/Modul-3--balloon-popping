const balloons = document.querySelectorAll(".box");

// For each balloon, add eventListener
balloons.forEach((event) => {
  event.addEventListener("mouseover", (x) => {
    x.target.classList.add("popped");

    const poppedCount = document.querySelectorAll(".popped").length - 1;
    console.log(poppedCount);

    // if total balloons with class "popped" equals 24, display "YAY!"
    if (poppedCount === 24) {
      const box = document.querySelector(".box");
      box.innerHTML = "";

      const h1 = document.createElement("h1");
      h1.textContent = "YAY!";
      h1.classList.add("afterText");
      box.appendChild(h1);
    }
  });
});
