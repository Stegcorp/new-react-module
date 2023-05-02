const initCatState = [];

export const catReducer = (state = initCatState, action) => {
    switch (action.type) {
        case 'ADD_CAT':
            state.push(action.payload)
            return [...state]
        case 'DEL_CAT':
            const idDel = action.payload;
            const catIndex = state.findIndex(value => value.id ===idDel);
            state.splice(catIndex,1)
            return [...state]
    }
    return [...state]
}
