
import PropTypes from "prop-types";

const ContainerBox = ({children}) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="border border-5 border-grey rounded container-wi container-hei">
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
