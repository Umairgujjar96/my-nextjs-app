const ROUTES = {
  HOME: "/nome",
  SINGLE_PRODUCT: (productId) => `/products/${productId}`,
};

export default ROUTES;

// IMPORT rOUTES

ROUTES.SINGLE_PRODUCT(2);
