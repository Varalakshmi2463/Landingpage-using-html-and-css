document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', addTask);

    function addTask(event) {
        event.preventDefault();

        const taskText = taskInput.value;
        const dueDate = dueDateInput.value;
        const priority = priorityInput.value;
        const category = categoryInput.value;

        const li = document.createElement('li');
        li.innerHTML = `
            <div class="task-info">
                <span class="task-text">${taskText}</span>
                <small>Due: ${dueDate} | Priority: ${priority} | Category: ${category}</small>
            </div>
            <div class="task-actions">
                <button class="complete-btn">Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        taskList.appendChild(li);

        li.querySelector('.complete-btn').addEventListener('click', () => {
            li.classList.toggle('complete');
        });

        li.querySelector('.delete-btn').addEventListener('click', () => {
            taskList.removeChild(li);
        });

        taskForm.reset();
    }
});
