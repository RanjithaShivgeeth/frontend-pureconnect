import React from "react";
import closeicon from "../../assets/Icons/close-24px.svg";
import '../modal/modal.scss'
function Modal({ isOpen, onClose, onDelete, items }) {
  if (!isOpen) return null;

  return(
    <>
      <div className="modal"></div>
      <div className="modal-wrapper">
        <div className="modal-btn">
          <button className="modal-btn--stylemod"   onClick={onClose}>
            <img className="modal-btn__icon" src={closeicon} alt="close modal-icon" />
          </button>
        </div>
        <div className="modal-body">
          <h1 className="modal-body__heading">{`Delete ${items.itemName} ${items.type}?`}</h1>
          <p className="modal-body__details">{`Please confirm that you'd like to delete ${items.itemName} from the ${items.type} list. You won't be able to undo this action.`}</p>
        </div>
        <div className="modal-buttons">
          <button className="modal-buttons__cancel  modal-buttons__cancel--stylemod" onClick={onClose}>Cancel</button>
          <button className="modal-buttons__delete modal-buttons__delete--stylemod" onClick={onDelete}>Delete</button>
        </div>
      </div>
    </>
  );
}
export default Modal;
