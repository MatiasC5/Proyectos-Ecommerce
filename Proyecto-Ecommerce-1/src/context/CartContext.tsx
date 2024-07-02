import { createContext, useState } from "react";
import { Product } from "../helper/products";

interface childrenProps {
  children: React.ReactNode;
}

export const CartContext = createContext({
  cart: [] as Product[],
  setCart: (cart: Product[]) => {
    cart;
  },
  addToCart: (product: Product) => {
    product;
  },
  deleteFromCart: (product: Product) => {
    product;
  },
});

export const CartProvider = ({ children }: childrenProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const productIndex = cart.findIndex((p) => p.id === product.id);

    if (productIndex >= 0) {
      const newCart = [...cart];

      return setCart([
        ...newCart,
        {
          ...product,
          quantity: (newCart[productIndex].quantity += 1),
        },
      ]);
    }
    return setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };

  const deleteFromCart = (product: Product) => {
    setCart(cart.filter((p) => p.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
