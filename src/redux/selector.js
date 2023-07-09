import { createSelector } from "@reduxjs/toolkit";

export const filterSearchSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
	todoListSelector,
	filterStatusSelector,
	filterSearchSelector,
	filterPrioritySelector,
	(todoList, status, search, priority) => {
		return todoList.filter((todo) => {
			if (status === "All") {
				return priority.length > 0
					? todo.name.includes(search) &&
					    priority.includes(todo.priority)
					: todo.name.includes(search);
			}

			return (
				todo.name.includes(search) &&
				(status === "Completed" ? todo.completed : !todo.completed) &&
				(priority.length > 0 ? priority.includes(todo.priority) : true)
			);
		});
	}
);
