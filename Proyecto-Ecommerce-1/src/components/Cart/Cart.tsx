import { useState } from "react";
import {
  AddToCartIcon,
  CartIcon,
  CartRemove,
} from "../../../public/Icons/Icons";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart } = useCart();

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <section>
      <input type="checkbox" id="check" hidden />
      <label
        className="fixed z-10 top-2 right-2 m-4 cursor-pointer"
        htmlFor="check"
      >
        <div
          className={`border ${
            isCartOpen ? "border-white" : " border-black"
          } rounded-full p-2 `}
          onClick={toggleCart}
        >
          <CartIcon />
        </div>
      </label>
      <section className="cart hidden overflow-y-scroll ">
        {cart.map((product) => {
          return (
            <ul key={product.id}>
              <li className=" flex flex-col justify-center items-center mt-2 py-4 ">
                <h3 className="text-white truncate w-40 p-2 text-xl">
                  {product.title}
                </h3>
                <img src={product.image} alt={product.title} className="w-20" />
                <strong className="text-white">${product.price}</strong>
                <span className="text-white">{product.quantity}</span>
                <div className="flex gap-2">
                  <button
                    className="bg-sky-400 font-bold p-2 mt-4 rounded-md hover:bg-sky-300"
                    onClick={() => addToCart(product)}
                  >
                    {" "}
                    <AddToCartIcon />
                  </button>
                  <button className="bg-red-500 font-bold p-2 mt-4 rounded-md hover:bg-red-300">
                    <CartRemove />
                  </button>
                </div>
              </li>
            </ul>
          );
        })}{" "}
      </section>
    </section>
  );
};
