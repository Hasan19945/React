

//REDUCER

const counterReducer=(state=0,action)=>{
    switch(action.type){
         case 'INCREMENT':
              return state+1;
         case 'DECREMENT':
              return state-1;
         default:
              return state;
       }
}


//?STORE

const createStore=(reducer)=>{
    let state;
    let listeners=[];

    const getState=()=>state;

    const dispatch=(action)=>{
        state=reducer(state ,action);
        listeners.forEach(listener=>listener());
    };

    const subscribe=(listener)=>{
        listeners.push(listener);
        return ()=>{
           listener=listener.filter(l=>l!==listener);
        };
    }

    dispatch({});

return {getState,dispatch,subscribe}
}






const store = createStore(counterReducer);
const render=()=>{
    document.getElementById("value").innerText=store.getState();
}
var unSubscribe = store.subscribe(render);
//unSubscribe();
render();
document.getElementById("btn_increase").addEventListener('click',()=>{
     store.dispatch({type:'INCREMENT'});
})
document.getElementById("btn_decrease").addEventListener('click',()=>{
    store.dispatch({type:'DECREMENT'});
})