import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoListSlice } from "./todoListSlice";
import { todoRemainingSelector } from "../../redux/selector";
import { v4 } from "uuid";

export default function TodoList() {
    const dispatch = useDispatch();
	const inputRef = useRef()

	const todoList = useSelector(todoRemainingSelector)
    const [valueText, setValueText] = useState('')
    const [priority, setPriority] = useState('Medium')

    const handleChangeInput = (e) => {
        setValueText(e.target.value)
    }

    const handleChangePriority = (e) => {
        setPriority(e);
    }

    const handleSubmit = () => {
        if(valueText !== '') {
			dispatch(todoListSlice.actions.addTodo({
				id: v4(),
				name: valueText,
				priority: priority,
				completed: false
			}))
		}
        setValueText('')
		inputRef.current.focus();
    }

	return (
		<Row style={{ height: "calc(100% - 40px)" }}>
			<Col
				span={24}
				style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
			>
				{todoList.map(todo => {
					return <Todo key={todo.id} id={todo.id} name={todo.name} completed={todo.completed} prioriry={todo.priority}/>
				})}
				
			</Col>
			<Col span={24}>
				<Input.Group style={{ display: "flex" }} compact>
					<Input value={valueText} ref={inputRef} onChange={handleChangeInput}/>
					<Select defaultValue="Medium" value={priority} onChange={handleChangePriority}>
						<Select.Option value="High" label="High">
							<Tag color="red">High</Tag>
						</Select.Option>
						<Select.Option value="Medium" label="Medium">
							<Tag color="blue">Medium</Tag>
						</Select.Option>
						<Select.Option value="Low" label="Low">
							<Tag color="gray">Low</Tag>
						</Select.Option>
					</Select>
					<Button type="primary" onClick={handleSubmit}>Add</Button>
				</Input.Group>
			</Col>
		</Row>
	);
}
