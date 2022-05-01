export const incrementCounter = (payload) => {
    return {
        type: 'INCREMENT',
        payload
    }
}

export const decrementCounter = () => {
    return {
        type: 'DECREMENT'
    }
}