//////////////////////////////////////////////
const productsContainer = document.querySelector('.products');
const resultEl = document.getElementById('result');
const searchInputEl = document.getElementById('search');

const pageFromEl = document.getElementById('page-from');
const pagesToEl = document.getElementById('page-to');
const totalEl = document.getElementById('total');
const btnNextEl = document.getElementById('btn-next');
const btnPrevEl = document.getElementById('btn-prev');

//////////////////////////////////////////////
function displayProducts(product) {
  const { id, title, price, discountPercentage, thumbnail } = product;
  const discount = price - (price * discountPercentage) / 100;

  const productColEl = document.createElement('div');
  productColEl.classList.add('col', 'mb-3');

  productColEl.innerHTML = `
      <div class='card p-2'>
        <img
          class="card-img"
          src=${thumbnail}
          alt=""
        />
        <p class="card-title product__title fs-5">${title}</p>
        <h4 class="priceDiscount">EGP ${(discount * 49.32).toFixed(2)}</h4>
        <h6 class="price text-decoration-line-through">EGP ${(
          price * 49.32
        ).toFixed(2)}
        </h6>
      </div>
    `;

  productsContainer.append(productColEl);

  // Product details Page
  productColEl.addEventListener('click', function () {
    window.location.href = `./productDetails/productDetails.html?id=${id}`;
  });
}

const limit = 40;
let totalProducts;

const getProducts = async function (skip = 0, query = '') {
  try {
    // 1) Get data
    const { data } = await axios.get(
      `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`
    );

    // 2) Display data
    productsContainer.innerHTML = '';
    data.products.map((product) => displayProducts(product));
    totalProducts = data.total;

    totalEl.textContent = totalProducts;
    resultEl.textContent = totalProducts;

    updatePaginationFn();
    //
  } catch (err) {
    console.log(err);
  }
};

let currentPage = 1;
let query = '';

// Pagination for products page
const updatePaginationFn = function () {
  const pageCount = Math.ceil(totalProducts / limit);
  let skip = (currentPage - 1) * limit;

  pageFromEl.textContent = skip + 1;
  pagesToEl.textContent =
    currentPage === pageCount ? totalProducts : currentPage * limit;

  btnNextEl.disabled = currentPage >= pageCount;

  btnPrevEl.disabled = currentPage === 1;
};

const paginationFn = function () {
  let skip = (currentPage - 1) * limit;
  getProducts(skip, query);
};

paginationFn();

// to go to the next page
btnNextEl.addEventListener('click', function () {
  currentPage++;
  paginationFn();
});
// to go to the previous page
btnPrevEl.addEventListener('click', function () {
  currentPage--;
  paginationFn();
});

// Search for products
searchInputEl.addEventListener('input', function (e) {
  currentPage = 1;
  query = e.target.value.trim();
  paginationFn();
});
