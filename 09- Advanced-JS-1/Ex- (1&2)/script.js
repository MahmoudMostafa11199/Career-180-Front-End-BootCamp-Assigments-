//////////////////////////////////////////////////////////////////////
// Exercise 1
//////////////////////////////////////////////////////////////////////
function exercise1() {
  const exerciseEl = document.querySelector('.exercise-1');

  // 1) Create a function
  function displayUserData(user) {
    for (const key in user) {
      // 4) Validate if the property is a function
      if (typeof user[key] !== 'function') {
        // 2) Display user properties
        const properties = document.createElement('p');
        properties.textContent = `${key}: ${user[key]}`;

        // 3) Append user properties on Screen
        exerciseEl.appendChild(properties);
      }
    }
  }

  // Passing user object to the function
  displayUserData({
    name: 'Mahmoud',
    birthYear: 1999,
    phone: '01018672627',
    track: 'Frontend Developer',
    calcAge: function () {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    },
  });
}
exercise1();

//////////////////////////////////////////////////////////////////////
// Exercise 2
//////////////////////////////////////////////////////////////////////
function exercise2() {
  const exerciseEl = document.querySelector('.exercise-2');

  // 1) Create a product object
  const products = [
    {
      name: 'Wireless Headphones',
      price: 2000,
      discount: 20,
      category: 'electronics',
    },
    {
      name: 'Smartphone',
      price: 5000,
      discount: 10,
      category: 'electronics',
    },
    {
      name: 'Laptop',
      price: 8000,
      discount: 5,
      category: 'electronics',
    },
    {
      name: 'Shoes',
      price: 1000,
      discount: 0,
      category: 'footwear',
    },
  ];

  // 2) Display product data on screen
  function displayProducts(products) {
    let sum = 0;

    products.forEach((product) => {
      const productContainer = document.createElement('div');
      productContainer.classList.add('product');
      exerciseEl.appendChild(productContainer);

      for (const key in product) {
        const productDetail = document.createElement('p');
        productDetail.textContent = `${key}: ${product[key]}`;
        productContainer.appendChild(productDetail);
      }

      // 3) Calculate Total Price
      sum += product.price;
    });

    const totalPrice = document.createElement('p');
    totalPrice.textContent = `Total price of all products = ${sum}$`;
    exerciseEl.appendChild(totalPrice);
  }
  displayProducts(products);
}
exercise2();
