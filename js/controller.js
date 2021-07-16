import state from "./model.js";

////////////////////
const productsPage = document.querySelector(".products_container");
const productPage = document.querySelector(".productPage");
const view_buttons = document.querySelectorAll(".view_btn");
const close_button = document.querySelector(".close-btn");

let productId = "";
const products = state.products;
productsPage.style.display = "grid";

////////////////////

view_buttons.forEach((view_btn) => {
  view_btn.addEventListener("click", (e) => {
    //getting product id
    const parent = e.target.closest(".product");
    productId = parent.getAttribute("data-id");
    console.log(parent.getAttribute("data-id"));

    //hiding products page
    // productsPage.classList.toggle("hidden");
    productsPage.style.display = "none";
    //removing hidden class
    productPage.classList.toggle("hidden");

    // sending id to display product
    const [selectedProduct] = products.filter((product) => {
      if (product.id === productId) return product;
    });

    if (productPage.querySelector(".product_container"))
      productPage.querySelectorAll(".product_container").forEach((div) => {
        div.style.display = "none";
      });

    //rendering product on page
    const htmlMarkup = `
                <div class="product_container" data-id="${selectedProduct.id}">
                  <div class="product__image">
                    <img src="${selectedProduct.image}"
                        alt="product image">
                  </div>
                  <div class="product__details">
                        <div class="product__title">
                            ${selectedProduct.title}
                        </div>
                        <div class="product__description">
                            ${selectedProduct.description}
                        </div>
                        <div class="product__price">
                            <div class="price"> Our Price
                                ${selectedProduct.price} ₹
                            </div>
                            <div class="price">
                                Mrp:
                                <span class="cut_throw">
                                ${selectedProduct.mrp} ₹
                                </span>
                            </div>
                        </div>
                        <div class="product__stars">
                          ${selectedProduct.rating}
                        </div>
                        <div class="product__about">
                            ${selectedProduct.about}
                        </div>
                        <div class="product__action">
                            <button class="view_btn">Add to cart</button>
                        </div>
                    </div>
                </div>
                `;

    productPage.insertAdjacentHTML("beforeEnd", htmlMarkup);
  });
});

close_button.addEventListener("click", () => {
  //removing hidden class
  productPage.classList.toggle("hidden");
  productsPage.style.display = "grid";
});
