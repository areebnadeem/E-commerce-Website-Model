let INITIAL_STATE = [{
    category: "A",
    model: "A1"
}, {
    category: "B",
    model: "B1"
}, {
    category: "C",
    model: "C1"
}, {
    category: "A",
    model: "A2"
}, {
    category: "B",
    model: "B2"
}, {
    category: "C",
    model: "C2"
},]

function AddProduct(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD":
            state.push(action.payload);
            break;

        case "DELETE":
            state.forEach((val, i) => {
                if (val.category === action.payload.category && val.model === action.payload.model) {
                    state.splice(i, 1);
                    
                }
            })
            break;

        default:
            return state;
    }

    return state;
}



export default AddProduct;