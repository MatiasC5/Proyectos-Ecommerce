import { useCart } from "../../hooks/useCart";
import { Product } from "../../helper/products";
import { AddToCartIcon, CartRemove } from "../../../public/Icons/Icons";

interface Props {
  product: Product;
}

export const ProductItem = ({ product }: Props) => {
  const { cart, addToCart, deleteFromCart } = useCart();

  const productInCart = cart.find((p) => p.id === product.id);

  return (
    <div
      key={product.id}
      className=" flex flex-col justify-center items-center mt-4"
    >
      <h3 className="truncate w-40 text-xl m-4">{product.title}</h3>
      <img src={product.image} alt="product image" className="w-20" />
      <span className="font-bold mt-2">${product.price}</span>
      <div className="flex gap-2">
        <button
          className={
            productInCart
              ? "bg-red-500 font-bold p-2 mt-4 rounded-md hover:bg-red-300"
              : "bg-sky-400 font-bold p-2 mt-4 rounded-md hover:bg-sky-300"
          }
          onClick={() => {
            productInCart ? deleteFromCart(product) : addToCart(product);
          }}
        >
          {" "}
          {productInCart ? <CartRemove /> : <AddToCartIcon />}
        </button>
      </div>
    </div>
  );
};
