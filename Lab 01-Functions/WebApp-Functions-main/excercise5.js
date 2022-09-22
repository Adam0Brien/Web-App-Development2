fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {

    //json.reduce() -- returns a single value: the functions sum 
    //eg. List of 5 objects will return 5

     const listCompletedTodosByUser = json.reduce((acc,todo) =>{ 
        todo.completed
        ? acc
        : acc.push({userId: todo.userId, title: todo.title})
        return acc;
        
     },[]);
     console.log(listCompletedTodosByUser)
    })
  
  .catch(function(err) { 
    console.log(err);
  });