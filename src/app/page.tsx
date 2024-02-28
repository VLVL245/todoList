"use client"

import InputSection from "@/components/InputSection";
import NavBar from "@/components/NavBar";
import TodosLists from "@/components/TodosLists";
import {useState, useEffect} from 'react'
import { ITodo } from "./interface/ITodo";



export default function Home() {
	const [todosList, setTodosList] = useState<ITodo[]>([])

	function getTodoList(todos: ITodo[]): void {
		setTodosList(todos)
	}

	function removeTodo(id: number): void {
		setTodosList(prev => prev.filter(todo => todo.id !== id))
	}

	useEffect(() => {
		if (typeof window !== 'undefined'){
		localStorage.setItem('todos', JSON.stringify(todosList))
}}, [todosList])

  return (
	<>
	<NavBar/>
	<main className="container">
		<InputSection getTodoList={getTodoList}/>
		<TodosLists todosList={todosList} removeTodo={removeTodo}/>
	</main>
</>
  );
}
