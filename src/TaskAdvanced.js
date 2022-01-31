import React, { useState } from 'react';
import'./style/TaskAdvanced.css';

export const TaskAdvanced = () => {
    const [checkedItems , setCheckedItems] = useState(false)
    const [items, setItems ] = useState('');
    const [itemArray, setItemArray] = useState([]); 
    const obtainValues = (e) => {
        e.preventDefault();

        if(items.length > 1){
        setItemArray([...itemArray, items])
        console.log(itemArray)
        setItems('')
        }
    }
    const deleteArr = (id) => {
        const arr = [...itemArray].filter(value => value !== id);
        setItemArray(arr)
    }
    const completeItem = (id) => {
        const arr = [...itemArray].filter(value => value == id);
        
    }
  return (
    <div className='taskAdvanced'>
        <div className='taskContainer'>
            <h2>Task Advanced</h2>
            <form>
                <input 
                    type='text'
                    value={ items }
                    onChange={ (e) => setItems(e.target.value) }
                />
                <button onClick={ obtainValues } >Add Task</button>
            </form>
        </div>

        <ul>
            {
                itemArray.map(item => {
                    return(
                        <div key={ item} className='cards'>
                            <button
                                onClick={ (e) => {
                                    deleteArr(item);
                                    e.preventDefault()
                                } }
                            >Delete</button>
                            <li  className={ checkedItems ? 'unchecked' : 'checked' }>{ item }</li>
                            <button
                                onClick={ (e) => {
                                    setCheckedItems(!checkedItems)
                                    e.preventDefault()
                                    completeItem(item)
                                } }
                            >Complete</button>
                        </div>
                    )
                })
            }
        </ul>
    </div>
  )
};

