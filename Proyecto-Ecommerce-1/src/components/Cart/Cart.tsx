import { useState } from "react";
import {
  AddToCartIcon,
  CartIcon,
  CartRemove,
} from "../../../public/Icons/Icons";
import { useCart } from "../../hooks/useCart";
import "./Cart.css";

export const Cart = () => {
  const [cartClicked, setCartClicked] = useState(false);
  const { cart } = useCart();

  function checkCartClicked() {
    setCartClicked(!cartClicked);
  }

  return (
    <section>
      <input type="checkbox" id="check" hidden />
      <label
        className="fixed z-10 top-2 right-2 m-4 cursor-pointer"
        htmlFor="check"
      >
        <div
          className={
            cartClicked
              ? "border border-white rounded-full p-2 "
              : "border border-black rounded-full p-2 "
          }
          onClick={checkCartClicked}
        >
          <CartIcon />
        </div>
      </label>
      <section className="cart hidden overflow-y-scroll ">
        {cart.map((product) => (
          <div
            className=" flex flex-col justify-center items-center mt-2 py-4 "
            key={product.id}
          >
            <h3 className="text-white truncate w-40 p-2 text-xl">
              {product.title}
            </h3>
            <img src={product.image} alt={product.title} className="w-20" />
            <strong className="text-white">${product.price}</strong>
            <div className="flex gap-2">
              <button
                className="bg-sky-400 font-bold p-2 mt-4 rounded-md hover:bg-sky-300"
                // onClick={() => addToCart(product)}
              >
                {" "}
                <AddToCartIcon />
              </button>
              <button className="bg-red-500 font-bold p-2 mt-4 rounded-md hover:bg-red-300">
                <CartRemove />
              </button>
            </div>
          </div>
        ))}{" "}
      </section>
    </section>
  );
};