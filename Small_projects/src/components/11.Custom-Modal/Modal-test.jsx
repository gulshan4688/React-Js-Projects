import { useState } from "react"
import Modal from "./Modal";
import './modal.css'

export default function ModalTest() {

    const [showModalPopup, setShowModalPopup] = useState(false);
    function handleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }
    function onClose(){
        setShowModalPopup(false);
    }

    return (
        <div className="modal-container" >
            <button onClick={handleModalPopup} > Show modal Popup</button>
            {
                showModalPopup && <Modal
                    body={<div>Customised body </div>}
                    onClose={onClose}
                />
            }
        </div>
    )
}