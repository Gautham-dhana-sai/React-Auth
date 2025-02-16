import { Modal } from "bootstrap";
import PropTypes from "prop-types";
import { useEffect } from "react";

import "../../styles/allignment.css"

const PopUpModal = ({modal_data, close, submit}) => {

  useEffect(() => {
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    const myModal = new Modal(document.getElementById("myModal"));
    myModal.show(); 
  }, []);

  function closeModal(){
    const myModal = new Modal(document.getElementById("myModal"));
    if (myModal){
      document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
      myModal.hide();
      close()
    }
  }

  function submitModal() {
    submit()
  }

  return (
    <>
      <div className="modal fade center-box" id="myModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content modal-w500">
            <div className="modal-header">
              <h5 className="modal-title color-black">
                <strong>{modal_data.title || 'Title'}</strong>
              </h5>
              {!modal_data.hide_close && <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}>
              </button>}
            </div>
            <div className="modal-body color-black">
              <p>{modal_data.context || 'Context'}</p>
            </div>
            <div className="modal-footer">
              {!modal_data.hide_close && <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>
                {modal_data.close_context || 'Close'}
              </button>}
              {!modal_data.hide_submit && <button type="button" className="btn btn-primary" onClick={submitModal}>
                {modal_data.confirm_context || 'Save changes'}
              </button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PopUpModal.propTypes = {
  modal_data: PropTypes.shape({
    title: PropTypes.string,
    context: PropTypes.string,
    confirm_context: PropTypes.string,
    close_context: PropTypes.string,
    hide_close: PropTypes.bool,
    hide_submit: PropTypes.bool
  }),
  close: PropTypes.func,
  submit: PropTypes.func
}

export default PopUpModal