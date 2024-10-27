import React, { useEffect, useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState('')
    const [todolist, setTodolist] = useState([])
    const [timedate, setTimedate] = useState('')

    const handleTodo = (event) => {
        event.preventDefault()
        if (todo.trim()) {
            setTodolist([...todolist, todo])
            setTodo('')
        }
    }

    const tododel = (index) => {
        let value = todolist[index]
        setTodolist(todolist.filter(item => item !== value))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const time = new Date().toLocaleTimeString()
            const date = new Date().toLocaleDateString()
            setTimedate(`${date} - ${time}`)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className='min-h-screen w-full bg-gradient-to-br from-blue-400 to-indigo-600 flex justify-center items-center p-4'>
                <div className='w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10'>
                    <h2 className='text-center text-2xl font-semibold text-gray-800 mb-4'>Todo List</h2>
                    <p className='text-center text-sm text-gray-600 mb-6'>Time: {timedate}</p>
                    <div className='flex items-center border rounded-lg p-2 mb-6'>
                        <input 
                            type="text" 
                            placeholder='Enter todo' 
                            value={todo} 
                            className='w-full px-4 py-2 rounded-l-lg outline-none border-none' 
                            onChange={(event) => setTodo(event.target.value)} 
                        />
                        <button
                            type='submit' 
                            className='bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-r-lg' 
                            onClick={handleTodo}>Add</button>
                    </div>
                    <div>
                        {todolist.length > 0 ? (
                            todolist.map((item, index) => (
                                <div key={index} className='flex justify-between items-center bg-gray-100 p-3 mb-2 rounded-md shadow-sm'>
                                    <p className='text-gray-800'>{item}</p>
                                    <button 
                                        className='text-red-500 hover:text-red-700 font-semibold'
                                        onClick={() => tododel(index)}>Delete</button>
                                </div>
                            ))
                        ) : (
                            <p className='text-center text-gray-500'>No todos yet! Start adding some.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo
