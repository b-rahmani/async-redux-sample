import * as actionTypes from "../action/actionTypes";
  
    
    const initialState = {
      data: null,
      error: null,
      loading:false
        
} 
   const reducer = (state=initialState,action) => {
     switch (action.type) {
         case actionTypes.FETCH_START:
             return {
               ...state, 
               loading:true
         }    
         case actionTypes.FETCH_SUCCESS:
             return {
            ...state, data:action.dataRecived,loading:false
         }    
         case actionTypes.FETCH_FAIL:
             return {
            ...state, loading:false,
         }    
         

       default:
         return state;
        
     }
};
   

export default reducer;