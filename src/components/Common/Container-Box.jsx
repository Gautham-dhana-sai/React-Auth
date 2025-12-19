
import PropTypes from "prop-types";

const ContainerBox = ({children}) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center container-shape">
        <div className="border border-5 border-grey rounded container-wi container-hei inner-scroll-area">
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
