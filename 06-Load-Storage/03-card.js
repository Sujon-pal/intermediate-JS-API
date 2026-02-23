const handleAddCard = () => {
  const productQuantity = document.getElementById("productQuantity");
  const productName = document.getElementById("productName");

  const name = productName.value;
  const quantity = productQuantity.value;
  displayProduct(name, quantity);
  saveToLocalStorage(name, quantity);

  productName.value = "";
  productQuantity.value = "";
};

const displayProduct = (name, quantity) => {
  const productContainer = document.getElementById("product-Container");
  const li = document.createElement("li");
  li.innerText = `${name} : ${quantity} `;
  productContainer.appendChild(li);
};

const getProductFromLocalStorage = () => {
  let card = {};
  const getProduct = localStorage.getItem('card')
  if (getProduct) {
    card = JSON.parse(getProduct);
  }
  return card;
};

const saveToLocalStorage = (productName, quantity) => {
  const card = getProductFromLocalStorage();
  card[productName] = quantity;
  const cardString = JSON.stringify(card)
  localStorage.setItem('card', cardString)
};
const loadProductsFromLocalStorage = () => {
  const card = getProductFromLocalStorage();

  for (const product in card) {
    displayProduct(product, card[product]);
  }
};

loadProductsFromLocalStorage();