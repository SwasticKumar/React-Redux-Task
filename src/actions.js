//Action types

export const ADD_TO_CART='ADD_TO_CART';
export const REMOVE_FROM_CART='REMOVE_FROM_CART';
export const UPDATE_QUANTITY='UPDATE_QUANTITY';

//Action creators

export const addToCart=(product)=>({
  type:ADD_TO_CART,
  payload:product,
});
export const removeFromCart=productId=>({
  type:REMOVE_FROM_CART,
  payload:{id:productId}  //payload is an object with id property and value of productId.
});

export const updateQuantity=(productId,newQuantity)=>({
  type:UPDATE_QUANTITY,
  payload:{productId,newQuantity}
});