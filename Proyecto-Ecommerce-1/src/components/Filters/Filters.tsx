import { useFilters } from "../../hooks/useFilters";

export const Filters = () => {
  const { handleInputChange, handleCategory, handlePrice } = useFilters();
  return (
    <section className="flex flex-col">
      <form className="flex flex-col">
        <input
          type="text"
          className="border-black border-2 w-48 mt-4 px-1"
          onChange={handleInputChange}
          name="title"
        />
        <button
          type="submit"
          className="bg-sky-400 font-bold p-2 mt-4 rounded-md hover:bg-sky-300"
        >
          Search
        </button>
      </form>
      <select
        className="mt-4 border-2 border-black  w-48"
        onChange={handleCategory}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>
      <input
        type="range"
        min="0"
        max="1000"
        className="mt-4"
        onChange={handlePrice}
      />
    </section>
  );
};
