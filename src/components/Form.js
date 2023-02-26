import "./Form.css";

const Form = () => {
  // Function on-change
  const inputTitle = (event) => {
    console.log(event.target.value);
  };
  const inputAmount = (event) => {
    console.log(event.target.value);
  };
  const saveItem = (event) => {
    event.preventDefault();
    console.log("บันทึกข้อมูลเรียบร้อย");
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
          />
        </div>
        <div className="form-control">
          <label htmlFor="">จำนวนเงิน</label>
          <input
            type="text"
            placeholder="(+ รายรับ, - รายจ่าย)"
            onChange={inputAmount}
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
