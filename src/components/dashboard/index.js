import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Approved } from './approved';
import { Pending } from './pending';
import { ModalBox } from './modalbox';
import { fetchExpenses } from '../../actions/actions';

import './dashboard.scss';

export const Dashboard = () => {        
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('http://localhost:4000/expenses')
          .then(resp => resp.json())
          .then(expenses => {
            dispatch(fetchExpenses(expenses));
          })
      }, []);

    return (
        <div className="dashboard container">
            <Approved />
            <Pending />
            <ModalBox />
        </div>
    )
}