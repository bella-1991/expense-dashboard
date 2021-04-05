import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { closeModal, rejectExpense } from '../../actions/actions';

export const ModalBox = () => {
    const modalOpen = useSelector(state => state.expensesReducer.modalOpen),
          dispatch = useDispatch(),          
          [reason, setReason] = useState('');

    const reject = () => {
        if (reason !== '') {
            dispatch(rejectExpense(reason));
        }
    }

    return (
        <Modal show={modalOpen} onHide={() => dispatch(closeModal())} centered className="expense-modal">
            <Modal.Header closeButton>
                <Modal.Title>Confirm Reject Expense</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Please provide a reason as to why you are rejecting this expense</Form.Label>
                    <Form.Control type="text" placeholder="Enter reason" onChange={(e) => setReason(e.target.value)} /></Form.Group>
            </Modal.Body>
                <Modal.Footer>                        
                    <Button variant="secondary" onClick={() => dispatch(closeModal())}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={reject} disabled={reason === '' ? true : false}>
                        Save Changes
                    </Button>
            </Modal.Footer>
        </Modal>
    )
}