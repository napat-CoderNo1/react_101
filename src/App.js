// import logo from "./logo.svg";
import "./App.css";
import Transaction from "./components/Transaction";
import Form from "./components/Form";
import { useState } from "react";

const Title = () => {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  return <h1 style={design}>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>;
};

function App() {
  // state
  const [items, setItems] = useState([]);

  // function
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  // HTML
  return (
    <div className="app-container">
      <Title />
      <Form onAddItem={onAddNewItem} />
      <Transaction items={items} />
    </div>
  );
}

export default App;
