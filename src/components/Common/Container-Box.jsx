
import PropTypes from "prop-types";

const ContainerBox = ({children}) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="p-5 border border-5 border-grey rounded">
        {children}
        </div>
      </div>
    </>
  );
}

ContainerBox.propTypes = {
  children: PropTypes.node
}

export default ContainerBox
