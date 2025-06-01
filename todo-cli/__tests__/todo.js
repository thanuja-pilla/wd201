const todoList = require("../todo.js");

describe("TodoList Test suite", () => {
  let todos;

  beforeEach(() => {
    todos = todoList();
    todos.all.length = 0;
    todos.add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = todos.all.length;
    todos.add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(todos.all.length).toBe(todoItemsCount + 1);
    // expect(typeof todos.all[1].title).toBe("string");
    // expect(todos.all[1].title.length).toBeGreaterThan(0);
    // expect(typeof all[1].completed).toBe("boolean");
    // expect(all[1].dueDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  test("Should mark a todo as complete", () => {
    let today = new Date();
    todos.add({
      title: "Task",
      completed: false,
      dueDate: today.toISOString().slice(0, 10),
    });
    const index = todos.all.length - 1;
    expect(todos.all[index].completed).toBe(false);
    todos.markAsComplete(index);
    expect(todos.all[index].completed).toBe(true);
  });

  test("to check retrieval of overdue items", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dueDate = yesterday.toISOString().slice(0, 10);

    todos.add({ title: "Overdue Task", completed: false, dueDate });
    const overdueItems = todos.overdue();
    expect(overdueItems.some((todo) => todo.title === "Overdue Task")).toBe(
      true
    );
  });
  test("to check retrieval of today items", () => {
    const today = new Date();
    const dueDate = today.toISOString().slice(0, 10);

    todos.add({ title: "Today Task", completed: false, dueDate });
    const todayItems = todos.dueToday();
    expect(todayItems.some((todo) => todo.title === "Today Task")).toBe(true);
  });
  test("to check retrieval of due later items", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dueDate = tomorrow.toISOString().slice(0, 10);

    todos.add({ title: "due later Task", completed: false, dueDate });
    const dueLaterItems = todos.dueLater();
    expect(dueLaterItems.some((todo) => todo.title === "due later Task")).toBe(
      true
    );
  });

  test("toDisplayable list formats the list correctly ", () => {
    todos.all.length = 0;
    const today = new Date().toISOString().slice(0, 10);

    todos.add({ title: "Task 1", completed: false, dueDate: today });
    todos.add({ title: "Task 2", completed: true, dueDate: today });
    todos.add({ title: "Task 3", completed: false, dueDate: "2099-12-31" });

    const expectedOutput = [
      "[ ] Task 1",
      "[x] Task 2",
      "[ ] Task 3 2099-12-31",
    ].join("\n");

    expect(todos.toDisplayableList(todos.all)).toBe(expectedOutput);
  });
});
