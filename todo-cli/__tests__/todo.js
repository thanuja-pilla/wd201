const todoList = require("../todo.js");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TodoList Test suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    expect(all.length).toBe(todoItemsCount + 1);
    expect(typeof all[1].title).toBe("string");
    expect(all[1].title.length).toBeGreaterThan(0);
    expect(typeof all[1].completed).toBe("boolean");
    expect(all[1].dueDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  test("Should mark a todo 1 as complete", () => {
    expect(all[1].completed).toBe(false);
    markAsComplete(1);
    expect(all[1].completed).toBe(true);
  });

  test("to check retrieval of overdue items", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dueDate = yesterday.toISOString().slice(0, 10);

    add({ title: "Overdue Task", completed: false, dueDate });
    const overdueItems = overdue();
    expect(overdueItems.some((todo) => todo.title === "Overdue Task")).toBe(
      true,
    );
  });
  test("to check retrieval of today items", () => {
    const today = new Date();
    const dueDate = today.toISOString().slice(0, 10);

    add({ title: "Today Task", completed: false, dueDate });
    const todayItems = dueToday();
    expect(todayItems.some((todo) => todo.title === "Today Task")).toBe(true);
  });
  test("to check retrieval of due later items", () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dueDate = tomorrow.toISOString().slice(0, 10);

    add({ title: "due later Task", completed: false, dueDate });
    const dueLaterItems = dueLater();
    expect(dueLaterItems.some((todo) => todo.title === "due later Task")).toBe(
      true,
    );
  });
});
