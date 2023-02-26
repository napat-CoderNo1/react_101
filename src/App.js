// import logo from "./logo.svg";
import "./App.css";
import Transaction from "./components/Transaction";
import Form from "./components/Form";

const Title = () => {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  return <h1 style={design}>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>;
};

function App() {
  return (
    <div className="app-container">
      <Title />
      <Form />
      <Transaction />
    </div>
  );
}

export default App;
