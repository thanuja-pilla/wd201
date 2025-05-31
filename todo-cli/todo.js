const todoList = () => {
   all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    let arrayOverdue = []
       all.forEach((todo)=>{
           if(todo.dueDate < today) {
            arrayOverdue.push(todo)
           }
       })
       return arrayOverdue;
    }
    
  const dueToday = () => {
   let arrayDueToday = []
   all.forEach((todo) => {
         if(todo.dueDate === today) {
            arrayDueToday.push(todo)
         }
   })
   return arrayDueToday;
  }

  const dueLater = () => {
   let arrayDueLater = []
   all.forEach((todo) => {
     if(todo.dueDate > today) {
            arrayDueLater.push(todo)
         }
   })
   return arrayDueLater;
  }

  const toDisplayableList = (list) => {
    return list
        .map((todo) => {
            const checkbox = todo.completed? "[x]" : "[ ]"
            const date = todo.dueDate === today ? "" : ` ${todo.dueDate}`
            return `${checkbox} ${todo.title}${date}`
        })
        .join("\n")
    };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;