"use client"

import './style/InputSection.css'
import React, { useState, useEffect } from "react"
import { ITodo } from "@/app/interface/ITodo"

interface IGetTodo {
	getTodoList(todos: ITodo[]): void 
}

export default function InputSection({getTodoList}: IGetTodo) {

	const [title, setTitle] = useState<string>("")
	const [locStor, setLocStor] = useState<ITodo[]>(() => {
		return JSON.parse(localStorage.getItem('todos') || "[]")
	})

	function setValueInLocalStorage(e: React.KeyboardEvent): void {
		if (e.key === "Enter") {
			const newTodo: ITodo = {
				title,
				id: Date.now()
			}
			setLocStor((prev) => [newTodo, ...prev])
		}
	}

	useEffect(() => {
		getTodoList(locStor)
	},[locStor])

	return(
		<section className='input-section'>
			<label className="input" htmlFor="Todo_input">Список дел</label>
			<input
			value={title}
			id="Todo_input"
			type="text"
			placeholder="Введите дело"
			onChange={(e) => setTitle(e.target.value)}
			onKeyDown={setValueInLocalStorage}
			/>
	</section>
	)
}