import { useState } from 'react'


// traigo el setCategories de GifExpertApp, la desestructuro en la funcion 
// addCategory y la defino en el la funcion onSubmit y agrego el nuevo valor 
// que seria el inputValue al array de categories


export const AddCategory = ({onNewCategory}) => {

    const [inputValue,setInputValue ] = useState('');

  const onInputChage = ({target}) => {
   
    setInputValue(target.value)

  }


  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue('')
    onNewCategory(inputValue);
   
  }
  
  
  return (

    <form  onSubmit={onSubmit}>
    <input
      type="text"
      placeholder="Buscar Gifs"
      value={inputValue}
      onChange={onInputChage}
      />
      </form>
  
  
  )
}
