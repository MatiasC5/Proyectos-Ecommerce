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
});

export const CartProvider = ({ children }: childrenProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    const newCart = structuredClone(cart);

    setCart([...newCart, product]);

    cart.includes(product) &&
      setCart([
        ...newCart,
        {
          ...product,
          quantity: 1,
        },
      ]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
