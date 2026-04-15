"use strict";
// todo 추가, 조회, 토글, 삭제
// id, 할일, 완료 여부
Object.defineProperty(exports, "__esModule", { value: true });
class TodoApp {
    // 클래스 내부에서 const나 let을 붙이지 않으면 static
    todoList = [];
    id = 1;
    // todo 추가
    addTodo(text) {
        const todo = {
            id: this.id++,
            text: text,
            complited: false,
        };
        this.todoList.push(todo);
    }
    // todo 조회
    getTodoList() {
        this.todoList.forEach((todo) => console.log(`${todo.complited ? "[✓]" : "[ ]"} ${todo.text}`));
        // console.log("📌Todo List");
        // for (const todo of this.todoList) {
        //   if (todo.complited) {
        //     console.log(`[✓] ${todo.text}`);
        //   } else {
        //     console.log(`[ ] ${todo.text}`);
        //   }
        // }
        console.log("\n");
    }
    // todo 토글
    toggleTodo(id) {
        const todo = this.todoList.find((todo) => todo.id === id);
        if (!todo) {
            throw new Error("존재하지 않는 Todo");
        }
        todo.complited = !todo.complited;
    }
    // todo 삭제
    deleteTodo(id) {
        // this.todoList = this.todoList.filter((todo) => todo.id !== id);
        const targetIndex = this.todoList.findIndex((todo) => todo.id === id);
        this.todoList.splice(targetIndex, 1);
    }
}
const todoApp = new TodoApp();
todoApp.addTodo("냠1");
todoApp.addTodo("냠2");
todoApp.addTodo("냠3");
todoApp.addTodo("냠4");
todoApp.getTodoList();
todoApp.toggleTodo(1);
todoApp.deleteTodo(3);
todoApp.getTodoList();
