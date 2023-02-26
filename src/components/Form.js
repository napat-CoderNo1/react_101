import { useState } from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  // useState
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  // Function on-change
  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    setTitle("");
    setAmount("");
  };

  // HTML
  return (
    <div>
      <form action="" onSubmit={saveItem}>
        <div className="form-control">
          <label htmlFor="">ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการของคุณ"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label htmlFor="">จำนวนเงิน</label>
          <input
            type="text"
            placeholder="(+ รายรับ, - รายจ่าย)"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn">
            เพิ่มข้อมูล
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
