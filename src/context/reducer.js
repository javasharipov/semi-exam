export const initialState = JSON.parse(localStorage.getItem('store')) || {
    count: 0,
    wishlist: []
}


export const reducer = (state, {type, payload}) => {
    switch(type) {
        case "TOOGLE_LIKE":
            let index = state.wishlist.findIndex(item => item.id === payload.id) 
            if(index < 0) {
                let result = {...state, wishlist: [...state.wishlist, payload]}
                localStorage.setItem("store", JSON.stringify(result))
                return result
            } else {
                let result = {...state, wishlist: state.wishlist.filter(item => item.id !== payload.id)}  
                localStorage.setItem("store", JSON.stringify(result))
                return result
            }
        default:
            return state
    }
}