fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {

    //json.reduce() -- returns a single value: the functions sum 
    //eg. List of 5 objects will return 5

    //acc - stores a value accumulated in any way 
    //(always starts at index 0 of a list)

     const numberCompleted = json.reduce((acc,todo) => 
            todo.completed 
            ? acc+1 
            : acc,0
     )
     console.log(numberCompleted)
    })
  
  .catch(function(err) { 
    console.log(err);
  });