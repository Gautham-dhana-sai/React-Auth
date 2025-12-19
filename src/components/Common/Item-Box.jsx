import PropTypes from "prop-types";

const ItemBox = ({item}) => {
  return (
    <>
      <div className="card-wrapper box">
        <div className="card">
          <strong className="m-left-5 m-top-ne8">{item.title}</strong>
          <div className="m-left-5 statement-block">{item.description}</div>
        </div>
      </div>
    </>
  );
};

ItemBox.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
}

export default ItemBox;
