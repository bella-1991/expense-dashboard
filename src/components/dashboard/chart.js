import React from 'react';
import { useSelector } from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

const Chart = () => {   
  const data = useSelector(state => state.expensesReducer.expenses.chart);

  return (
    <Doughnut data={data} />
  )
}

export default Chart