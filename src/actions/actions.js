export const fetchExpenses = data => {
    return {
        type: 'FETCH_EXPENSES', 
        data: data
    }
} 

export const toggleSearch = () => {
    return {
        type: 'TOGGLE_SEARCH'
    }
}

export const approveExpense = id => {
    return {
        type: 'APPROVE_EXPENSE',
        data: id
    }
}

export const rejectExpense = id => {
    return {
        type: 'REJECT_EXPENSE',
        data: id
    }
}

export const openModal = id => {
    return {
        type: 'OPEN_MODAL',
        data: id
    }
}

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL'
    }
}