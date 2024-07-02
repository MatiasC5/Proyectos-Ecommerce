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
    const productInCart = cart.findIndex((p) => p.id === product.id);

    if (productInCart >= 0) {
      const newCart = cart.map((p) => {
        return p.id === product.id
          ? { ...p, quantity: (product.quantity += 1) }
          : p;
      });
      setCart(newCart);
    } else {
      return setCart([...cart, { ...product, quantity: 1 }]);
    }
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
