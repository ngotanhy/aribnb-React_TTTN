import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../utils/setting';
import { AppDispatch } from '../configStore';

interface Comment{
    id: number,
    maPhong: number,
    maNguoiBinhLuan: number,
    ngayBinhLuan: string,
    noiDung: string,
    saoBinhLuan: number
}

interface CommentState{
    commentById:Comment|any;
}

const initialState : CommentState= {
    commentById:[]
}

const commentReducer = createSlice({
  name: 'commentReducer',
  initialState,
  reducers: {
    CommentRoomId:(state,action:PayloadAction<Comment>)=>{
           state.commentById = action.payload;
    }
  }
});

export const {CommentRoomId} = commentReducer.actions

export default commentReducer.reducer


//--------call api --------------------

export const getCommentRoomById=(id:number) =>{
    return async (dispatch:AppDispatch)=>{
          try{
            let result= await http.get(`/binh-luan`) ;
            let arrComment=result.data.content;
            // console.log(arrComment)
            let arrCommentId=arrComment.reduce((arr:{}[],item:{maPhong:number})=>{
                if(item.maPhong===id){
                   arr.push(item);
                }
                return arr;
            },[])
            const action = CommentRoomId(arrCommentId);
            dispatch(action);
          }
          catch(err){
            console.log(err);
          }
    }
}