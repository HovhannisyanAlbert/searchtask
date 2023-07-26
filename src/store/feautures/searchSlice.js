import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../thunk";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        date:[],
        count:1,
        pageDate:[]
    },
    reducers:{
        
        nextPage:(state,action) => {
                state.count ++
                state.pageDate = state.date.filter((elem)=> elem.userId === state.count)
        },
        prevPage:(state,action)=>{
            state.count--
            state.pageDate = state.date.filter((elem)=> elem.userId === state.count)
        },
        searchItem:(state,action) =>{
             const text = action.payload
             state.pageDate = state.date.filter(elem=>elem.title.includes(text))
        },
        sortDate:(state,action)=>{
            state.pageDate  = state.pageDate.sort((a,b)=> b.title.length - a.title.length)
           
        },
        firstDate:(state,action) =>  {

         
           
            state.pageDate = state.date.filter((elem)=> elem.userId === 1)
            
        }

    },
    extraReducers:(bulider)=>{
        bulider.addCase(getData.fulfilled,(state,action)=>{
            state.date = action.payload
        })
    }
})

export const {getAllDate,nextPage,prevPage,searchItem,firstDate,sortDate} = searchSlice.actions

export const searchSliceReducer =searchSlice.reducer












