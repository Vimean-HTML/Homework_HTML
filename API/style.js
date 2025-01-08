async function fetchTodo() {
      const todoId = document.getElementById('todoId').value;
      const todoResult = document.getElementById('todoResult');
      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
          if (!response.ok) throw new Error('Todo not found');
          const todo = await response.json();
          todoResult.innerHTML = `<span class="${todo.completed ? 'completed' : ''}">${todo.title}</span> <br> ID: ${todo.id} | ${todo.completed ? 'Completed' : 'Not Completed'}`;
      } catch (error) {
          todoResult.textContent = error.message;
      }
  }
