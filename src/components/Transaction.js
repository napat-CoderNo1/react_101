import Item from "./Item";
import "./Transaction.css";
import { v4 as uuidv4 } from "uuid";

const Transaction = () => {
  const data = [
    { title: "ค่ากิน", amount: 10000 },
    { title: "ค่าเดินทาง", amount: 3000 },
    { title: "ค่ารักษาพยาบาล", amount: 10000 },
  ];
  return (
    <ul className="item-list">
      {data.map((element) => {
        return (
          <Item title={element.title} amount={element.amount} key={uuidv4()} />
        );
      })}
    </ul>
  );
};

export default Transaction;
