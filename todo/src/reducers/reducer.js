import Moment from 'react-moment';
import moment from 'moment';

export const initialState={
    todos:[
        {item: 'Learn Redux',
         completed:false,
         id: 1,
        //  completeBy: moment().add(2, 'days').calendar(),
        completeBy:'11-10-2020',
        tag:'Learning',
        },
        {item: '5 mile Run',
        completed:false,
        id: 2,
        completeBy: '11-12-2020',
        tag:'Health',
       },
       {item: 'Build LEGO with Kids',
       completed:true,
       id: 3,
       completeBy:'10-10-2020',
       tag:'Family',
      },
    ],
}

export const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TASK' :{
            return {
                todos:[...state.todos,
                {item:action.payload.task,
                 completed:false,
                 id:Date.now(),
                //  completeBy: moment().add(1, 'days').calendar(),}
                completeBy: moment().format('MM-DD-YYYY'), 
                tag:action.payload.tag}
                ]
            }
        }
        case 'COMPLETE_TASK':
            const newState=state.todos.map((item)=>{
                if(item.id === action.payload){
                    return {...item,completed: !item.completed}
                }else return item;
            })
            return {
                todos:newState
            };
        case 'CLEAR_COMPLETE':
            return {
                todos:[...state.todos.filter((item)=>{
                    if(item.completed === false){
                        return item;
                    }
                })]
            }
        default:
            return state;
    }
}