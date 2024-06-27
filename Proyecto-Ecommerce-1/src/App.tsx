import { Cart } from "./components/Cart/Cart";
import { Filters } from "./components/Filters/Filters";
import { Products } from "./components/Products/Products";

function App() {
  return (
    <main className="flex flex-col items-center w-full">
      <h1 className="text-5xl font-bold text-sky-500 text-center">Ecommerce</h1>
      <Cart />
      <Filters />
      <Products />
    </main>
  );
}

export default App;
