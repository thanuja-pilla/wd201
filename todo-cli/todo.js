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
    return all.filter((todo) => todo.dueDate < todayString);
  };

  const dueToday = () => {
    return all.filter((todo) => todo.dueDate === todayString);
  };

  const dueLater = () => {
    return all.filter((todo) => todo.dueDate > todayString);
  };

  const toDisplayableList = (list) => {
    const todayString = today.toISOString().slice(0, 10);
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
