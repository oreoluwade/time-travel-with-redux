import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from './List.module.scss';

const List = () => {
  const todos = useSelector(state => state.todos);

  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {todos.map((todo, index) => (
          <li
            key={todo.id}
            className={styles.item}
            style={{ backgroundColor: index % 2 === 0 ? 'lightgrey' : 'white' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>

      <Link href="/todo/create">
        <a className={styles.link}>Create New Todo</a>
      </Link>
    </div>
  );
};

export default List;
