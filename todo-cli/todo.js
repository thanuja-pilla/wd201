const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };
  const today = new Date();
  const todayString = today.toISOString().slice(0, 10);

  const overdue = () => {
    let arrayOverdue = [];
    all.forEach((todo) => {
      if (todo.dueDate < todayString) {
        arrayOverdue.push(todo);
      }
    });
    return arrayOverdue;
  };

  const dueToday = () => {
    let arrayDueToday = [];
    all.forEach((todo) => {
      if (todo.dueDate === todayString) {
        arrayDueToday.push(todo);
      }
    });
    return arrayDueToday;
  };

  const dueLater = () => {
    let arrayDueLater = [];
    all.forEach((todo) => {
      if (todo.dueDate > todayString) {
        arrayDueLater.push(todo);
      }
    });
    return arrayDueLater;
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        const checkbox = todo.completed ? "[x]" : "[ ]";
        const date = todo.dueDate === todayString ? "" : ` ${todo.dueDate}`;
        return `${checkbox} ${todo.title}${date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports = todoList;
