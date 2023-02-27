// import logo from "./logo.svg";
import "./App.css";
import Transaction from "./components/Transaction";
import Form from "./components/Form";
import { useEffect, useReducer, useState } from "react";
import DataContext from "./data/DataContext";
import Report from "./components/Report";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Title = () => {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  return <h1 style={design}>โปรแกรมบัญชีรายรับ-รายจ่าย</h1>;
};

function App() {
  // useState
  const [items, setItems] = useState([]);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  // reducer state
  const [showReport, setShowReport] = useState(false);
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return setShowReport(true);
      case "HIDE":
        return setShowReport(false);
    }
  };
  const [result, dispatch] = useReducer(reducer, showReport);

  // useEffect
  useEffect(() => {
    const amounts = items.map((items) => items.amount);

    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    console.log("รายได้รวม =", income);
    setReportIncome(income);

    const expense =
      -1 *
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0);
    console.log("รายจ่ายรวม =", expense);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);

  // function
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };

  // HTML
  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="app-container">
        <Title />
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" element={<Report />}></Route>
              <Route
                path="/insert"
                element={
                  <>
                    <Form onAddItem={onAddNewItem} />{" "}
                    <Transaction items={items} />{" "}
                  </>
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
