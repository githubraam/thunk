import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
    data: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failes'
    error: null
}

export const fetchData = createAsyncThunk('formdata/getFormData', ()=>{

    return new Promise((resolve, reject)=>{
        setTimeout(resolve,2000)
    }).then((res)=>{
    }).catch((err)=>{
    })
})


const formDataSlice = createSlice({
    name: 'formdata',
    initialState,
    reducers:{
  
        saveData: (state, action)=>{
            state.data.push(action.payload);

        }
    },
    extraReducers: (builder)=>{
        builder
        .addCase(fetchData.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchData.fulfilled, (state)=>{
            state.status = 'succeeded';
        })
        .addCase(fetchData.rejected, (state)=>{
            state.status = 'failed';
        })
    }
})

export const {saveData} = formDataSlice.actions;
export default formDataSlice.reducer;