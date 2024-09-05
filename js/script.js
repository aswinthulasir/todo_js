var completedCount = 0;  // Keep track of how many tasks are marked as completed

    // Fetch data from API using normal functions
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(function(response) {
            return response.json();  // Convert response to JSON
        })
        .then(function(data) {
            displayTodos(data);  // Call displayTodos to show items on the page
        })
        .catch(function(error) {
            console.log('Error:', error);
        });

    // Function to display todos on the webpage
    function displayTodos(todos) {
        var todoContainer = document.getElementById('todo-container');
        
        todos.forEach(function(todo) {
            // Create a div for each todo
            var todoDiv = document.createElement('div');
            todoDiv.classList.add('todo-item');

            // Create a checkbox (unchecked by default, even if completed in API)
            var checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = false;  // Always start unchecked

            // Add event listener to count checked tasks
            checkbox.addEventListener('change', function() {
                if (checkbox.checked) {
                    completedCount++;
                } else {
                    completedCount--;
                }
                checkCompletion();  // Call function to check if 5 tasks are completed
            });

            // Create a label for the todo title
            var label = document.createElement('label');
            label.textContent = todo.title;

            // Append the checkbox and label to the div
            todoDiv.appendChild(checkbox);
            todoDiv.appendChild(label);
            todoContainer.appendChild(todoDiv);
        });
    }

    // Function to check if 5 tasks are completed
    function checkCompletion() {
        new Promise(function(resolve, reject) {
            if (completedCount === 6) {
                resolve('Congrats. 5 Tasks have been Successfully Completed');
            } else if (completedCount > 5) {
                reject('You can only complete 5 tasks!');
            }
        })
        .then(function(message) {
            alert(message);  // Show alert if 5 tasks are completed
        })
        .catch(function(error) {
            alert(error);  // Show alert if more than 5 tasks are checked
        });
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