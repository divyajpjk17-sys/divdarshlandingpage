// Select modal and its elements
const modal = document.getElementById("item-modal");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalDesc = document.getElementById("modal-desc");
const modalPrice = document.getElementById("modal-price");
const modalClose = document.getElementById("modal-close");

// Select all menu items
const menuItems = document.querySelectorAll(".menu-item");

// Add click/touch listener to each item
menuItems.forEach(item => {
  item.addEventListener("click", () => {
    
    // Add little grow animation before opening modal
    item.classList.add("pulse");
    setTimeout(() => item.classList.remove("pulse"), 250);

    // Get data attributes
    const name = item.getAttribute("data-name");
    const price = item.getAttribute("data-price");
    const fullDesc = item.getAttribute("data-full");
    const imgSrc = item.querySelector("img").src;

    // Fill modal content
    modalImage.src = imgSrc;
    modalName.textContent = name;
    modalDesc.textContent = fullDesc;
    modalPrice.textContent = price;

    // Show modal
    modal.classList.add("show");
  });
});

// Close modal on button
modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

// Close on background click
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
});
