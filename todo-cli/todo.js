const todoList = () => {
  let all = []
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
        .map((obj) => {
            const checkbox = obj.completed? "[x]" : "[ ]"
            const date = obj.dueDate === today ? "" : ` ${obj.dueDate}`
            return `${checkbox} ${obj.title}${date}`
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

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")