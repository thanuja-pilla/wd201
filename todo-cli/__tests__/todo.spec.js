const todoList = require('../todo.js');

const { all,markAsComplete , add } = todoList();

describe("TodoList Test suite", () => {
    
    beforeAll( () =>{
        add(
            {
                 title:"Test todo" ,
                completed: false,
                dueDate: new Date().toISOString().slice(0,10)
            })
    })

    test("Should add new todo" , () => {
        const todoItemsCount = all.length;
        add(
            {
                title:"Test todo" ,
                completed: false,
                dueDate: new Date().toISOString().slice(0,10)
            });
        expect(all.length).toBe(todoItemsCount+1);
    });
    test("Should mark a todo  as complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
    test("Should mark a todo 1 as complete", () => {
        expect(all[1].completed).toBe(false);
        markAsComplete(1);
        expect(all[1].completed).toBe(true);
    })
})
