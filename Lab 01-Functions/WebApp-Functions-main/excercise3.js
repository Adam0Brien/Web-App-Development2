fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {

    // filter the todos that are NOT completed
    //The filter() method creates a new array 
    //filled with elements that pass a test provided by a function.

    
    //   .map() function creates a new array for 
    //   each todo that includes the title and userID
     const listUncompletedTodos = json.filter((todo) => !todo.completed)
     .map(todo => ({userId : todo.userId, title : todo.title})) 

     console.log(listUncompletedTodos)
     
    })
  
  .catch(function(err) { 
    console.log(err);
  });