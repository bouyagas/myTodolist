// Code goes here
console.log('Up and Running !');

var todosList = {
    todos: [],

    addTodos: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });

    },
    changeTodos: function(position, todoText) {
     this.todos[position].todoText = todoText;
    },
    deleteTodos: function(position){
      this.todos.splice(position, 1);
    },

    toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
    },

    toggleAll: function() {
     var totalTodos = this.todos.length;
     var completedTodos = 0;
     // Gets the number of completed todos.
     this.todos.forEach(function(todo) {
        if(todo.completed === true) {
          completedTodos ++;
        }
     });

      this.todos.forEach(function(todo) {
        if (completedTodos === totalTodos) {
           todo.completed = false;
        } else {
           todo.completed = true;
        }
      });
    }
};


 var handlers = {
   addTodos: function() {
     var addTodosTextInput = document.getElementById('addTodosTextInput');
         todosList.addTodos(addTodosTextInput.value);
         addTodosTextInput.value = '';
         views.displayTodos();

   },
    changeTodos: function() {
      var changeTodosPositionInput = document.getElementById('changeTodosPositionInput');
      var changeTodosTextInput = document.getElementById('changeTodosTextInput');
          todosList.changeTodos(changeTodosPositionInput.valueAsNumber, changeTodosTextInput.value)
          changeTodosTextInput.value = '';
          changeTodosPositionInput.value = '';
          views.displayTodos();

    },
    deleteTodos: function(position) {
          todosList.deleteTodos(position);
          views.displayTodos();
    },
    toggleCompleted: function() {
      var toggleCompleted = document.getElementById('toggleCompleted');
          todosList.toggleCompleted(toggleCompleted.valueAsNumber);
          toggleCompleted.value = '';
          views.displayTodos();
    },
    toggleAll: function() {
       todosList.toggleAll();
          views.displayTodos();
   }
 };


var views = {
    displayTodos: function() {
            var todosUl = document.querySelector('ul');
            todosUl.innerHTML = '';
            todosList.todos.forEach(function(todo, position) {
            var todosLi = document.createElement('li');
            var todoTextWithCompletion = '';
              if (todo.completed === true) {
                   todoTextWithCompletion = '(x)' + todo.todoText;
              } else {
                todoTextWithCompletion = '()' + todo.todoText;
              }
          todosLi.id = position;
          todosLi.textContent =   todoTextWithCompletion;
          todosLi.appendChild(this.createDeleteButton());
          todosUl.appendChild(todosLi);
   }, this);

  },
    createDeleteButton: function() {
      var deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.className = 'deleteButton';
     return deleteButton;
    },
    setUpEventListener: function() {
       var todosUl = document.querySelector('ul');
           todosUl.addEventListener('click', function(event) {
           var elementClicked = event.target;
         if (elementClicked.className === 'deleteButton' ) {
               handlers.deleteTodos(parseInt(elementClicked.parentNode.id));
         }
      });
    }
};

views.setUpEventListener();



// function runWithDebugger(ourFunction) {
//   debugger;
//   ourFunction();
// }


// setInterval(function(){
//   console.log("hello")
// }, 1000)

// setTimeout(function(){
//   console.log("hello")
// }, 1000)

// my forEach

// function forEach(myArray, myFunction) {
//   for (var i = 0; i < myArray.length; i++) {
//     myFunction(myArray[i])
//   }
// }

