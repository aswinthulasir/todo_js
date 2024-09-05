fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())  
        .then(data => {
            
            const todoList = document.getElementById('todo-list');

            
            data.forEach(todo => {
                
                const todoItem = document.createElement('div');
                todoItem.className = 'todo-item';

                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = `todo-${todo.id}`;
                checkbox.checked = todo.completed; 

                
                const label = document.createElement('label');
                label.htmlFor = `todo-${todo.id}`;
                label.textContent = todo.title;

                
                todoItem.appendChild(checkbox);
                todoItem.appendChild(label);

                
                todoList.appendChild(todoItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));


















      function validateCheckboxes() {
        const checkboxes = document.querySelectorAll('.todo-checkbox');
        let checkedCount = 0;

     
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkedCount++;
            }
        });

 
        if (checkedCount <= 5) {
            alert("Task completed succesfully");
        } else {
            alert("Check minimum 5");
        }
    }






    function callback() {
        // Getting the input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if username and password are correct
        if (username == 'admin' && password == '12345') {
            // Redirect to dashboard.html
            window.location.href = 'dashboard.html';
            return false; // Prevents form default action
        } else {
            // Alert incorrect username or password
            alert("Incorrect username or password");
            return false; // Prevents form submission
        }
    }