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
     for (var i = 0; i < totalTodos; i++) {
       if(this.todos[i].completed === true)  {
        completedTodos ++;
       }
     }
     // Case 1: if everything's true, make everything false.
      if (completedTodos === totalTodos) {
         for (var i = 0; i < totalTodos; i++) {
           this.todos[i].completed = false;
         }
       // Case 2: otherwise make everything true.
      } else {
         for (var i = 0; i < totalTodos; i++) {
           this.todos[i].completed = true;
         }
      }
      this.displayTodos();
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
    deleteTodos: function() {
      var deleteTodosPositionInput = document.getElementById('deleteTodosPositionInput');
       todosList.deleteTodos(deleteTodosPositionInput.valueAsNumber);
       deleteTodosPositionInput.value = '';
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
      for (var i = 0; i < todosList.todos.length; i++) {
            var todosLi = document.createElement('li');
            var todos = todosList.todos[i];
            var todoTextWithCompletion = '';
              if (todos.completed === true) {
                   todoTextWithCompletion = '(x)' + todos.todoText;
              } else {
                  todoTextWithCompletion = '()' + todos.todoText;
              }
               todosLi.textContent =   todoTextWithCompletion;

               todosUl.appendChild(todosLi);
          }
    },
};





