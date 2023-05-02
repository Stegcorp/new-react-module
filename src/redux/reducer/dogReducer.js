const initDogState = [];
export const dogReducer = (state = initDogState, action) => {
    switch (action.type) {
        case 'ADD_DOG':
            state.push(action.payload)
            return [...state]
        case 'DEL_DOG':
            const idDel = action.payload;
            const dogIndex = state.findIndex(value => value.id ===idDel);
            state.splice(dogIndex,1)
            return [...state]

    }
    return [...state]
}
