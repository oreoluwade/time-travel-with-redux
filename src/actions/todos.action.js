import { createAction } from '@reduxjs/toolkit';
import { ADD_TODO } from '../constants';

export const createNewTodo = createAction(ADD_TODO);
