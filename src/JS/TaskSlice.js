import { createSlice } from '@reduxjs/toolkit'

const initialState =[{id:"1",name:"Acheter"},{id:"2",name:"Naviger"},{id:"3",name:"Devlopper"},{id:"3",name:"Jouer"}] 
 


export const Taskslice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addnewtask:(state,action)=>{
      state=state.push(action.payload)
    },
    deletetask:(state,action)=>{
      return state.filter((el)=>el.name !==action.payload)
    },
    updatetask:(state,action)=>{
      console.log(action)
      return state.map((el)=>(el.id===action.payload.id? el=action.payload : el))
    }
   
  },
})

// Action creators are generated for each case reducer function
export const {addnewtask,deletetask,updatetask} = Taskslice.actions

export default Taskslice.reducer