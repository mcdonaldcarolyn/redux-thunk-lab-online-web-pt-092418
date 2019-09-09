// import { bindActionCreators } from "redux";

export default function catsReducer(state = {
    loading: false, 
    pictures: []}, action) {
        switch(action.type){
            case 'LOADING_CATS':{
                return {
                    ...state, loading: true
                }
            }
                
            case 'FETCH_CATS':{
                return{
                    ...state, pictures: action.pictures
                }
            }
              default:{
                  return state;  
              }
        }
    }


