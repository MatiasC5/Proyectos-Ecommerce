import { createContext, useState } from "react";
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
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        handleInputChange,
        handleCategory,
        handlePrice,
        filterProduct,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
