import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";


const ToDo = () => {

    const [task, setTask] = useState([])
    const [input, setInput] = useState("")

    const handleAddItem = (value) => {
        if (value !== '') {
            const newTask = {
                id: Date.now(),
                value,
                completed: false,
            }
            setTask([...task, newTask])
            setInput('')
        }
    }

    const handleDeleteItem = (key) => {
        setTask(task.filter(task => task.id !== key));
    }


    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4"> To Do List </h1>

            <div className="row justify-content-center">
                <div col-md-4>
                    <div className="card">
                        <div className="card-body">
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Add new task"
                                    size="lg"
                                    value={input}
                                    onChange={(event) => setInput(event.target.value)}
                                />
                                <Button
                                    variant="dark"
                                    className="mx-2"
                                    onClick={() => handleAddItem(input)}
                                >
                                    Add
                                </Button>
                            </InputGroup>

                            <ListGroup>
                                {task.map((item, index) => {
                                    return (
                                        <div key={index} >
                                            <ListGroup.Item
                                                style={{
                                                    display: "flex",
                                                    justifyContent: 'space-between',
                                                    margin: ' 10px'
                                                }}
                                            >
                                                {item.value}
                                                <span>
                                                    <Button style={{ marginRight: "10px" }}
                                                        variant="light"
                                                        onClick={() => handleDeleteItem(item.id)}
                                                    >
                                                        Delete
                                                    </Button>
                                                </span>
                                            </ListGroup.Item>
                                        </div>
                                    );
                                })}
                            </ListGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDo