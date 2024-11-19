// let tasks = [];

// function addTask() {
//     const input = document.getElementById('taskInput');
//     const task = input.value.trim();

//     if (task) {
//         tasks.push({
//             id: Date.now(),
//             text: task,
//             completed: false
//         });
//         input.value = '';
//         renderTasks();
//     } else {
//         alert('Please enter a task before adding!');
//     }
// }

// function toggleTask(id) {
//     tasks = tasks.map(task => 
//         task.id === id ? { ...task, completed: !task.completed } : task
//     );
//     renderTasks();
// }

// function deleteTask(id) {
//     tasks = tasks.filter(task => task.id !== id);
//     renderTasks();
// }

// function renderTasks() {
//     const todoList = document.getElementById('todoList');
//     todoList.innerHTML = '';

//     tasks.forEach(task => {
//         const li = document.createElement('li');
//         li.className = `todo-item ${task.completed ? 'completed' : ''}`;

//         li.innerHTML = `
//             <input type="checkbox" 
//                    ${task.completed ? 'checked' : ''} 
//                    onchange="toggleTask(${task.id})">
//             <span>${task.text}</span>
//             <button onclick="deleteTask(${task.id})">×</button>
//         `;

//         todoList.appendChild(li);
//     });
// }

// // Add event listener for Enter key
// document.getElementById('taskInput').addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         addTask();
//     }
// });

// // Initialize with some sample tasks
// tasks = [
//     { id: 1, text: 'Create a JavaScript project', completed: false },
//     { id: 2, text: 'Upload it online', completed: false },
//     { id: 3, text: 'Add project link in the resume', completed: true }
// ];
// renderTasks();
