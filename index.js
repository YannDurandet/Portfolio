let logoToggle = false;
function toggleLogos() {
  logoToggle = !logoToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (logoToggle && item.classList.contains("logoItem")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("logoToggle");
  document.getElementById("showAllButton").style.display = logoToggle ? "block" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
}

let designToggle = false;
function toggleDesigns() {
  designToggle = !designToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (designToggle && item.classList.contains("webDesignItem")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("designToggle");
  document.getElementById("showAllButton").style.display = designToggle ? "block" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
}

let illustrationToggle = false;
function toggleIllustrations() {
  illustrationToggle = !illustrationToggle;
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (illustrationToggle && item.classList.contains("illustrationItem")) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  }
  document.body.classList.toggle("illustrationToggle");
  document.getElementById("showAllButton").style.display = illustrationToggle ? "block" : "none";
  document.getElementById("LogoButton").style.display = "none";
  document.getElementById("webDesignButton").style.display = "none";
  document.getElementById("illustrationButton").style.display = "none";
}

function showAll() {
  const items = document.querySelectorAll(".workItem");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.style.display = "block";
  }
  document.body.classList.remove("logoToggle");
  document.body.classList.remove("designToggle");
  document.body.classList.remove("illustrationToggle");

  logoToggle = false;
  document.getElementById("showAllButton").style.display = "none";
  document.getElementById("LogoButton").style.display = "block";
  document.getElementById("webDesignButton").style.display = "block";
  document.getElementById("illustrationButton").style.display = "block";
}

/*=== Dark Mode === */
let contrastToggle = false;
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += "darkTheme"
  } else {
    document.body.classList.remove("darkTheme")
  }
}

/* Modal */
let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modalOpen");
  }
  isModalOpen = true;
  document.body.classList += " modalOpen";
}