import React,{useContext, useEffect,useReducer} from 'react';
import reducer from './reducer';

let url='https://dummyjson.com/products?limit=100';

const initialState={
    isLoading:true,
    query:'phone',
    limit:0,
    products:[],
}

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    
  const fetchData=async (url)=>{
    dispatch({type:'SET_LOADING'})
    try{
      const res=await fetch(url);
      const data=await res.json();
      dispatch({
        type:"GET_DATA",
        payload:{
            products:data.products,
            limit:data.limit,
        },
      });
    }catch(error){
      console.log(error);
    }
  };
  // const searchPost=(searchQuery)=>{
  //   dispatch({
  //     type:'SEARCH_QUERY',
  //     payload:searchQuery,
  //   })
  // }
  
  useEffect(()=>{
    fetchData(`${url} `);
  }, [state.query])

    return <AppContext.Provider value={{...state}}>{children}</AppContext.Provider>
}

const useGlobalContext=()=>{
  return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};