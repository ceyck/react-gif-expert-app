import React,{ useState } from 'react';
import PropTypes from 'prop-types';

function AddCategory({ setCategories }) {

   const [inputValue, setInputValue] = useState("");

   const handlInputChange = e => {
      setInputValue(e.target.value);
   }

   const handleSubmit = (e) => {
      e.preventDefault();
      if( inputValue.trim().length > 2 ){
         setCategories(cat => [inputValue, ...cat]);
         setInputValue('');
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <input 
            type="text"
            value={ inputValue }
            onChange={(e) => handlInputChange(e)}
         />
      </form>
   )
}

AddCategory.propTypes = {
   setCategories : PropTypes.func.isRequired
}

export default AddCategory
