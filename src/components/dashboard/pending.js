import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Expense from './Expense';
import { approveExpense, openModal } from '../../actions/actions';

export const Pending = () => {    
    const pending = useSelector(state => state.expensesReducer.expenses.pending),
          dispatch = useDispatch();

    const approve = id => {
        dispatch(approveExpense(id));
    }
    const openReasonModal = id => {
        dispatch(openModal(id));
    }

    return (
        <Card className="dashboard__section pending">
            <Card.Header as="div" className="dashboard__header">    
                <div className="dashboard__header-icon pending__header-icon">
                    <FontAwesomeIcon icon={faClock} />
                </div>  
                <div className="dashboard__header-text">       
                    <h5 className="dashboard__header-title">All Expenses Pending Approval</h5>
                    <span className="dashboard__header-price">
                        ${pending.reduce((total, each) => total = total + each.amount, 0)}</span>
                </div>
                <div className="dashboard__header-cta">                    
                    <p className="pending__view-all">
                        <a href="/">View All</a>
                    </p>
                    <span>{pending.length} Records</span>
                </div>
            </Card.Header>
            <Card.Body className="dashboard__body">
                <div className="expense">
                    { pending.length ? (
                        pending.map(each => (
                            !each.status && 
                                <Expense expense={each} approve={approve} openReasonModal={openReasonModal} key={each.id} />
                        ))) : (
                            <span className="expenses__no-results">No expenses left!</span>
                        )
                    }
                    </div>
            </Card.Body>            
        </Card>
    )
}