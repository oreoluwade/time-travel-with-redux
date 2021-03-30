import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import { createNewTodo } from '../../../src/actions';
import styles from './Create.module.scss';

const Create = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setText(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(createNewTodo({ text, id: uuidv4() }));
    setText('');
    Router.push('/todo/list');
  };

  const onKeyDown = e => {
    if (e.code === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className={styles.root}>
      <input
        value={text}
        onChange={handleInputChange}
        onKeyDown={onKeyDown}
        className={styles.input}
      />
      <button type="button" onClick={handleSubmit} className={styles.submit}>
        Submit
      </button>
    </div>
  );
};

export default Create;
