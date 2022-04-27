export const selectBug = (bug) => {
    return {
        type: 'BUG_SELECTED',
        payload: bug
    }
}

export const addBug = (bug) => {
    return {
        type: 'BUG_ADDED',
        payload: {
            bug
        }
    }
}

export const removeBug = (bugId) => {
    return {
        type: 'BUG_REMOVED',
        payload: {
            id: bugId
        }
    }
}

