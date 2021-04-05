import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Expense ({ expense, approve, openReasonModal }) {
    return (
        <div className="expense__item">
            <div className="expense__section expense__section--details">
                <h5 className="expense__title">{expense.number} - {expense.title}</h5>
                <span>{expense.type}</span>
            </div>
            <div className="expense__section expense__section--cta">
                <h4 className="expense__amount">
                    ${expense.amount}                
                    <FontAwesomeIcon icon={faFileAlt} />
                </h4>
                <div className="expense__actions">
                    <Button className="expense__button expense__button--approve" onClick={() => approve(expense.id)}>              
                        <FontAwesomeIcon icon={faCheckCircle} />
                        Approve
                    </Button>
                    <Button className="expense__button expense__button--reject" onClick={() => openReasonModal(expense.id)}>              
                        <FontAwesomeIcon icon={faTimesCircle} />
                        Reject
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Expense