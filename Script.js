const Features = document.querySelectorAll(".Featured .Feat");

Features.forEach((feature, index) => {
  feature.addEventListener("click", (e) => {
    let model = document.createElement("div");
    model.classList.add("modal");
    let overlay = document.createElement("div");
    overlay.classList.add("overlay");
    let modal_content = document.createElement("div");
    modal_content.classList.add("modal-content");

    modal_content.innerHTML = feature.innerHTML;

    model.appendChild(overlay);
    model.appendChild(modal_content);
    document.body.appendChild(model);
  });
});

// close the modal
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    document.body.removeChild(e.target);
  }
});
