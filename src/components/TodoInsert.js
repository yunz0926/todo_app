import React, {useState, useCallback} from 'react';
import './TodoInsert.css';
import {MdAdd} from 'react-icons/md';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');

        e.preventDefault();
    },[value, onInsert]);

    return (
        <form className="TodoInsert" onSubmit = {onSubmit}>
            <input 
            placeholder="할일을 입력하세요"
            value = {value}
            onChange = {onChange}
            />
            <button type="submit"><MdAdd /></button>
        </form>
    );
};

export default TodoInsert;