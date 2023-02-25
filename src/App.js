// import logo from "./logo.svg";
import "./App.css";
import Transaction from "./components/Transaction";

const Title = () => {
  return <h1>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>;
};
const Description = () => {
  return <p>บันทึกข้อมูลบัญชีรายวัน</p>;
};

function App() {
  return (
    <div>
      <Title />
      <Description />
      <Transaction />
    </div>
  );
}

export default App;
