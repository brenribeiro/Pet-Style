const cartCount = document.querySelector(".cart-count");
const cartLink = document.querySelector(".cart-link");
const form = document.querySelector(".newsletter-form");
const formMessage = document.querySelector(".form-message");

let itemCount = 0;

document.querySelectorAll(".add-button").forEach((button) => {
  button.addEventListener("click", () => {
    itemCount += 1;
    cartCount.textContent = String(itemCount);
    cartLink.setAttribute("aria-label", `Sacola, ${itemCount} ${itemCount === 1 ? "item" : "itens"}`);
    button.innerHTML = "Adicionado <span aria-hidden=\"true\">✓</span>";
    button.setAttribute("aria-label", `${button.dataset.product} adicionado à sacola`);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Obrigado! Em breve você receberá novidades por e-mail.";
  form.reset();
});
