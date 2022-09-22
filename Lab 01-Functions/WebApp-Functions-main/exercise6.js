fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(json => {

  //json.reduce() -- returns a single value: the functions sum 
  //eg. List of 5 objects will return 5

  //print the number of completed todos per each user
   const listNumberOfCompletedTodosByUser = json.reduce((acc,todo) =>{ 
      if(todo.completed){
        acc[todo.userId] === undefined
         ? acc
         : acc.push({userId: todo.userId, title: todo.title})
   }
      return acc;
      
   },[]);
   console.log(listNumberOfCompletedTodosByUser)
  })

.catch(function(err) { 
  console.log(err);
});