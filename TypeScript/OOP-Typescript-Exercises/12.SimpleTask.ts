class Task {
	title: string;
	description: string;
	completed = false;
	private _createdBy: string;

	constructor(title: string, description: string, createdBy: string) {
		this.title = title;
		this.description = description;
		this._createdBy = createdBy;
	}

	toggleStatus(): void {
		this.completed = !this.completed;
	}

	get createdBy(): string {
		return this._createdBy;
	}

	getDetails(): string {
		return `Task: ${this.title} - ${this.description} - ${
			this.completed ? "Completed" : "Pending"
		}`;
	}

	public static createSampleTasks(): Task[] {
		return [new Task('something', 'random description', 'Sashko'), new Task('something 2 ', 'random description 2', 'Sashko 2')];
	}
}


const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));

