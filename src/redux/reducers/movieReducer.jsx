import { ActionTypes } from "../../constants/actionTypes"

const initialState ={
    popularMovies:[],
    genres:[],
    isLoading:true,
}
const movieReducer=(state=initialState,action) => {
    switch(action.type){
        case ActionTypes.SET_MOVIES:
            console.log(action.payload)
            return {
                ...state,
                popularMovies:action.payload.results, 
                isLoading:false, 
            };
        case ActionTypes.SET_LOADING:
            return {
                ...state,
                isLoading:action.payload,
            };
        case  ActionTypes.GET_GENRES :
            return{

               ...state,
               genres:action.payload,
            }

        // case ActionTypes.LIST_MOVIES :
        //     return{
        //         ...state,
        //         popularMovies: action.payload
        //     }    

    
            default:
                return state;


    }
   }

export default movieReducer

