import { Product } from "../../helper/products";
import { useFilters } from "../../hooks/useFilters";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const { filterProduct, products } = useFilters();

  const filteredProducts = filterProduct(products);

  return (
    <section className="grid  lg:grid-cols-3 sm:grid-cols-2 items-center gap-24 ">
      {filteredProducts.map((product: Product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </section>
  );
};
