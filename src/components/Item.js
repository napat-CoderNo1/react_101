import PropTypes from "prop-types"; // ES6

const Item = (props) => {
  const { title, amount } = props;
  return (
    <div>
      <li>
        {title}
        <span>{amount}</span>
      </li>
    </div>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Item;
