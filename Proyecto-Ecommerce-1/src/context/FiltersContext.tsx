import { createContext, useEffect, useState } from "react";
import { Product } from "../helper/products";

interface FiltersContextProps {
  children: React.ReactNode;
}

interface Filters {
  title: string;
  category: string;
  price: number;
}

export const FiltersContext = createContext({
  filters: {} as Filters,
  products: [] as Product[],
  setProducts: (product: Product[]) => {
    product;
  },
  setFilters: (filters: Filters) => {
    filters;
  },
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    e;
  },
  handleCategory: (e: React.ChangeEvent<HTMLSelectElement>) => {
    e;
  },
  handlePrice: (e: React.ChangeEvent<HTMLInputElement>) => {
    e;
  },
  filterProduct: (products: Product[]) => {
    products;
  },
});

export const FiltersProvider = ({ children }: FiltersContextProps) => {
  const [filters, setFilters] = useState<Filters>({
    title: "",
    category: "all",
    price: 0,
  });

  const [products, setProducts] = useState<Product[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      title: e.currentTarget.value,
    });
  };

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      category: e.currentTarget.value,
    });
  };

  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      price: parseInt(e.currentTarget.value),
    });
  };

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

  const filterProduct = (products: Product[]) => {
    return products.filter((product) => {
      if (
        product.price >= filters.price &&
        (filters.category === "all" || filters.category === product.category)
      ) {
        return (
          product.title.toLowerCase().includes(filters.title.toLowerCase()) &&
          (filters.category === "all" ||
            product.category
              .toLocaleLowerCase()
              .includes(filters.category.toLocaleLowerCase()))
        );
      }
    });
    return products;
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        products,
        handleInputChange,
        handleCategory,
        handlePrice,
        filterProduct,
        setFilters,
        setProducts,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
