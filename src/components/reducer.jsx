const reducer =(state,action)=>{
    switch(action.type){
        case "GET_DATA":
            return{
                ...state,
                isLoading:false,
                products:action.payload.products,
            }
        // case "SEARCH_QUERY":
        //     return{
        //         ...state,
        //         query:action.payload,
        //     }
        case "SET_LOADING":
            return{
                ...state,
                isLoading:true,
            }
        default:
            return state;
    }
}
export default reducer;