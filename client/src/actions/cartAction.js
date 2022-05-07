export const addToCart = (pizza, quantity, varient) => {
  var cartItem = {
    name: pizza.name,
    _is: pizza._id,
    image: pizza.image,
    varient: varient,
    quantity: quantity,
    prices: pizza.prices,
    price: pizza.prices[0][varient] * quantity,
  };
  dispatchEvent({ type: "ADD_TO_CART", payload: cartItem });
};
