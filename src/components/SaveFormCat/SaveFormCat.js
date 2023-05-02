import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";


const SaveFormCat = () => {
    const {register, handleSubmit, reset} = useForm();
const cats = useSelector(state => state.catReducer);
    const dispatch = useDispatch();

    const catForm = (cat) => {
        const catId = new Date().getMilliseconds();
        cat.id = catId
        dispatch({type:'ADD_CAT',payload:cat})
        reset()
    }

    return (

      <div>
          <form onSubmit={handleSubmit(catForm)}>
              <input type={'text'} placeholder={'cat'} {...register('cat')} />
              <button>Save</button>
          </form>
      <div>
          {
              cats.map(value=><div key={value.id}>{value.cat}<button onClick={()=>{
                  dispatch({type:'DEL_CAT',payload:value.id})
              }}>Delete</button></div>)
          }

      </div>
      </div>

    );
};

export default SaveFormCat;
