"use client"
import './style/TodosLists.css'
import { ITodo } from '@/app/interface/ITodo'
import React, { useEffect } from 'react'

interface IGetTodos {
	todosList: ITodo[]
	removeTodo(id: number): void
}

export default function TodosLists({todosList, removeTodo}: IGetTodos) {
console.log(todosList)
	return(
		<section>
			<ul>
				{todosList.map(todo => {
					return (
						<li className='todo-container' key={todo.id}>
							<div>{todo.title}</div>
							<button className='icon' onClick={(e) => removeTodo(todo.id)}>delete</button>
						</li>
					)
				})}
			</ul>
		</section>
	)
}