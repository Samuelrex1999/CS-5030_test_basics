var todoservice = require("./todo.service.js")
describe('todo testing', () => {
    let ts = new todoservice();
    test("add_todo method testing", () => {
        ts.add_todo({"title": "T1",
        "description": "D1",
        "done": false});
        expect(ts.todo_data.todo.length).toEqual(4);
    });

   test("update_todo method testing", () => {
        ts.update_todo(0, {"title": "Test title",
        "description": "Test description",
        "done": false});
        expect(ts.get_todos(0) == {"title": "Test title",
        "description": "Test description",
        "done": false});
    });

    test("delete_todo method testing", () => {
        var length=ts.todo_data.todo.length
        ts.delete_todo(0);
        expect(ts.todo_data.todo.length).toEqual(length-1);
    });
});