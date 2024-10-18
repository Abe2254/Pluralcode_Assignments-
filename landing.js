document.querySelectorAll(".accordion-title").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;

    // Toggle the 'active' class
    accordionItem.classList.toggle("active");

    // Close other items
    document.querySelectorAll(".accordion-item").forEach((item) => {
      if (item !== accordionItem) {
        item.classList.remove("active");
      }
    });
  });
});
