"use strict";
class Task {
    title;
    description;
    completed = false;
    _createdBy;
    constructor(title, description, createdBy) {
        this.title = title;
        this.description = description;
        this._createdBy = createdBy;
    }
    toggleStatus() {
        this.completed = !this.completed;
    }
    get createdBy() {
        return this._createdBy;
    }
    getDetails() {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? "Completed" : "Pending"}`;
    }
    static createSampleTasks() {
        return [new Task('something', 'random description', 'Sashko'), new Task('something 2 ', 'random description 2', 'Sashko 2')];
    }
}
const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));
//# sourceMappingURL=12.SimpleTask.js.map