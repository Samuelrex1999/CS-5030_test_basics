class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }

    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todo_data.todo.push(todo);
        console.log(this.todo_data.todo)
    }

    delete_todo(id){
        this.todo_data.todo = this.todo_data.todo.filter(function(todo,index){
            return index!=id;
        })  
        console.log(this.todo_data.todo)      
    }

    update_todo(id, todo){
        this.todo_data.todo[id]= todo;    
        console.log(this.todo_data.todo)    
    }
}

module.exports = todoservice;