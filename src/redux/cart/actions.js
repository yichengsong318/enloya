import {
  MODIFY_CART,
  EMPTY_CART,
} from '../actions';

export const addToCart = (serviceId) => {
  let services = localStorage.getItem('cart_services') ? JSON.parse(localStorage.getItem('cart_services')) : [];

  if (services.indexOf(serviceId) === -1) {
    services.push(serviceId);
    localStorage.setItem('cart_services', JSON.stringify(services));
  }
  
  return (
    {
      type: MODIFY_CART,
      payload: services
    }
  )
};

export const removeFromCart = (serviceId) => {
  console.log(serviceId)
  let services = localStorage.getItem('cart_services') ? JSON.parse(localStorage.getItem('cart_services')) : [];
  
  if (services.indexOf(serviceId) !== -1) {
    console.log(services);
    services = services.filter(s => s !== serviceId);
    console.log(services);
    localStorage.setItem('cart_services', JSON.stringify(services));
  } 

  return (
    {
      type: MODIFY_CART,
      payload: services
    }
  )
};

export const emptyCart = () => {
  localStorage.removeItem('cart_services');

  return (  
    {
      type: EMPTY_CART
    }
  )
};