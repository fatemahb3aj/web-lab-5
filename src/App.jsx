import { useState } from "react";
import ProductList from "./components/ProductList";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Product Dashboard</h1>

      <div>
        <label>
          Type your name:{" "}
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </label>
      </div>

      <p>Hello, {name}</p>

      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {showProducts === true && <ProductList />}
    </div>
  );
}