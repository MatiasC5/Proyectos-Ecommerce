import { useEffect, useState } from "react";
import { useFilters } from "../../hooks/useFilters";
import { Product } from "../../helper/products";
import { AddToCartIcon, CartRemove } from "../../../public/Icons/Icons";
import { useCart } from "../../hooks/useCart";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { filterProduct } = useFilters();
  const { addToCart } = useCart();

  const filteredProducts = filterProduct(products);

  const getProdutcs = async () => {
    try {
      const productList = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
      return productList;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProdutcs();
  }, []);

  return (
    <section className="grid  lg:grid-cols-3 sm:grid-cols-2 items-center gap-24 ">
      {filteredProducts.map((product: Product) => {
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
          </div>
        );
      })}
    </section>
  );
};
