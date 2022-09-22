fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    //The filter() method creates a new array 
    //filled with elements that pass a test provided by a function.
     const completed = json.filter(todos => todos.completed) 
     completed.forEach( (todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`)
    })
  })
  .catch(function(err) { 
    console.log(err);
  });