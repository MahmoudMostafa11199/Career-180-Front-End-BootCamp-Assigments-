const displayProductDetails = function (product) {
  const {
    brand,
    title,
    description,
    images,
    rating,
    price,
    discountPercentage,
    minimumOrderQuantity,
    dimensions,
    category,
  } = product;
  const priceAfterDiscount = price - (price * discountPercentage) / 100;

  const productDetailsContainer = document.querySelector('.product__details');

  productDetailsContainer.innerHTML = `
      <div class="col-1 col-md-5 p-3">
          <img
            class="w-100 shadow-sm mb-4 img--show"
            src=${images[0]}
            alt=""
          />
          <div class="d-flex gap-3 overflowx-auto flex-nowrap images">
            ${images
              .map((image, i) => {
                return `<img
                class="w-25 shadow-sm img--select ${
                  i === 0 && 'border border-primary'
                }"
                src=${image}
                alt=""
                onclick="toggle(event)"
              />`;
              })
              .join('')}
          </div>
        </div>
        <div class="col-1 col-md-7 p-3">
          <p class="text-info mb-1">Brand: ${brand || category}</p>
          <h2 class="fw-bold">${title}</h2>
          <span class="text-secondary">rating : ${rating} </span>
          <h3 class="fw-bold text-success mt-3">
            EGP ${(priceAfterDiscount * 49.32).toFixed(2)}
            <span class="text-decoration-line-through fs-5">EGP ${(
              price * 49.32
            ).toFixed(2)}</span>
          </h3>
          <p class="text-muted mb-4">Width: ${dimensions.width}, 
            Height: ${dimensions.height}</p>
          
          <span class="text-muted fw-bold">Product description :</span>
          <p class="text-muted">
            ${description}
          </p>
          <p class="text-muted fw-medium">Minmum Order: ${minimumOrderQuantity}</p>
        </div>
        `;
};

const getProductDetails = async function (id) {
  try {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`);

    displayProductDetails(data);
  } catch (err) {
    console.error(err);
  }
};

window.addEventListener('load', () => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get('id');
  getProductDetails(id);
});

const toggle = function (event) {
  document.querySelector('.img--show').src = event.target.src;

  document
    .querySelectorAll('.img--select')
    .forEach((img) => img.classList.remove('border', 'border-primary'));

  event.target.classList.add('border', 'border-primary');
};
