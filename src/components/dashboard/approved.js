import { useSelector } from 'react-redux';
import { Card, Spinner } from 'react-bootstrap';
import Chart from './chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

export const Approved = () => {
    const approved = useSelector(state => state.expensesReducer.expenses.approved);

    return (
        <Card className="dashboard__section approved">
            <Card.Header as="div" className="dashboard__header">    
                <div className="dashboard__header-icon approved__header-icon">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} />
                </div>  
                <div className="dashboard__header-text">       
                    <h5 className="dashboard__header-title">All Approved & Closed Expenses</h5>
                    <span className="dashboard__header-price">
                        ${approved.reduce((total, each) => total = total + each.amount, 0)}
                    </span>
                </div>
            </Card.Header>
            <Card.Body className="dashboard__body">
                {
                    approved.length ? (
                        <Chart />
                    ) : (
                        <div className="dashboard__loader">
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </div>
                    )
                }
            </Card.Body>
        </Card>
    )
}