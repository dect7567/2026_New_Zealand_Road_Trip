(() => {
  const root = document.querySelector(".deer-park-page");
  if (!root) return;

  const printBtn = document.getElementById("dpPrintBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const lotrDetails = root.querySelector(".dp-lotr-details");

  function highlightTarget(id) {
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;

    if (lotrDetails && lotrDetails.contains(target)) {
      lotrDetails.open = true;
    }

    root.querySelectorAll(".is-highlighted").forEach((el) => {
      el.classList.remove("is-highlighted");
    });
    target.classList.add("is-highlighted");

    target.scrollIntoView({
      behavior: reducedMotion.matches ? "auto" : "smooth",
      block: "center"
    });
  }

  root.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-target]");
    if (!trigger || !root.contains(trigger)) return;
    highlightTarget(trigger.dataset.target);
  });

  root.addEventListener("keydown", (event) => {
    const trigger = event.target.closest(".dp-pt[data-target]");
    if (!trigger) return;
    if (event.key === "Enter") {
      event.preventDefault();
      highlightTarget(trigger.dataset.target);
    } else if (event.key === " ") {
      event.preventDefault();
    }
  });

  root.addEventListener("keyup", (event) => {
    const trigger = event.target.closest(".dp-pt[data-target]");
    if (!trigger) return;
    if (event.key === " ") {
      highlightTarget(trigger.dataset.target);
    }
  });
})();
