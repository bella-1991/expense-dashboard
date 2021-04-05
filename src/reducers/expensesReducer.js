import { faChargingStation } from "@fortawesome/free-solid-svg-icons";

var defaultState = {
    searchOpen: false,
    cart: {
        total: 0.00,
        items: []
    },
    navigation: [
        { id: 0, text: 'Home', url: 'home' },
        { id: 1, text: 'About', url: 'about' },
        { id: 2, text: 'Messages', url: 'messages' },
        { id: 3, text: 'Features', url: 'features' },
        { id: 4, text: 'Tour', url: 'tour' }
    ],
    modalOpen: false,
    rejectId: '',
    expenses: {
        approved: [],
        rejected: [],
        pending: [],
        chart: {
            labels: ['Approved $700 70%', 'Closed $100 30%'],
            datasets: [
                {
                    label: 'Expenses',
                    data: [70, 30],
                    backgroundColor: [
                        '#2B720C',
                        '#113394'
                    ],
                    borderColor: [
                        '#2B720C',
                        '#113394'
                    ],
                    borderWidth: 1,
                },
            ],
        }
    }
}

const expensesReducer = (state = defaultState, action) => {
    switch(action.type) {  
        case 'TOGGLE_SEARCH':
            return {
                ...state, 
                searchOpen: !state.searchOpen
            } 
        case 'APPROVE_EXPENSE':
            var approvedItems = [ ...state.expenses.approved, state.expenses.pending.find(a => a.id === action.data)],
                pendingItems = state.expenses.pending.filter(a => a.id !== action.data),
                approvedAmount = approvedItems.reduce((total, each) => total = total + each.amount, 0),
                rejectedAmount = state.expenses.rejected.reduce((total, each) => total = total + each.amount, 0),
                totalAmount = approvedAmount + rejectedAmount,
                approvedPercent = Math.round((approvedAmount / totalAmount) * 100),
                rejectedPercent = Math.round((rejectedAmount / totalAmount) * 100),
                approvedLabel = 'Approved $' + approvedAmount + ' ' + approvedPercent + '%',
                rejectedLabel = 'Closed $' + rejectedAmount + ' ' + rejectedPercent + '%',
                chart = {
                    labels: [approvedLabel, rejectedLabel],
                    datasets: [
                        ...state.expenses.chart.datasets,
                    ]
                };

            chart.datasets[0].data = [approvedAmount, rejectedAmount];

            return {
                ...state, 
                expenses: {
                    ...state.expenses,
                    approved: approvedItems,
                    pending: pendingItems,
                    chart: chart
                }
            } 
        case 'REJECT_EXPENSE':
            var rejectedItems = [ ...state.expenses.rejected, state.expenses.pending.find(a => a.id === state.rejectId)],
                pendingItems = state.expenses.pending.filter(a => a.id !== state.rejectId),
                rejectedAmount = rejectedItems.reduce((total, each) => total = total + each.amount, 0),
                approvedAmount = state.expenses.approved.reduce((total, each) => total = total + each.amount, 0),
                totalAmount = approvedAmount + rejectedAmount,
                approvedPercent = Math.round((approvedAmount / totalAmount) * 100),
                rejectedPercent = Math.round((rejectedAmount / totalAmount) * 100),
                approvedLabel = 'Approved $' + approvedAmount + ' ' + approvedPercent + '%',
                rejectedLabel = 'Closed $' + rejectedAmount + ' ' + rejectedPercent + '%',
                chart = {
                    labels: [approvedLabel, rejectedLabel],
                    datasets: [
                        ...state.expenses.chart.datasets,
                    ]
                };

            chart.datasets[0].data = [approvedAmount, rejectedAmount];

            return {
                ...state,                
                modalOpen: false,
                rejectId: '',
                expenses: {
                    ...state.expenses,
                    rejected: rejectedItems,
                    pending: pendingItems,
                    chart: chart
                }
            } 
        case 'OPEN_MODAL':
            return {
                ...state,
                modalOpen: true,
                rejectId: action.data                
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modalOpen: false,
                rejectId: ''                
            }
        case 'FETCH_EXPENSES':
            const expenses = action.data;
            console.log(expenses)

            var approvedAmount = expenses.approved.reduce((total, each) => total = total + each.amount, 0),
                rejectedAmount = expenses.rejected.reduce((total, each) => total = total + each.amount, 0),
                totalAmount = approvedAmount + rejectedAmount,
                approvedPercent = Math.round((approvedAmount / totalAmount) * 100),
                rejectedPercent = Math.round((rejectedAmount / totalAmount) * 100),
                approvedLabel = 'Approved $' + approvedAmount + ' ' + approvedPercent + '%',
                rejectedLabel = 'Closed $' + rejectedAmount + ' ' + rejectedPercent + '%',
                chart = {
                    labels: [approvedLabel, rejectedLabel],
                    datasets: [
                        ...state.expenses.chart.datasets,
                    ]
                };

            chart.datasets[0].data = [approvedAmount, rejectedAmount];

            return {
                ...state, 
                expenses: {
                    ...state.expenses,
                    approved: expenses.approved,
                    pending: expenses.pending,
                    rejected: expenses.rejected,
                    chart: chart
                }
            } 
        default: 
            return state;
    }
}

export default expensesReducer;