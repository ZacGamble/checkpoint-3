import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(data) {
        this.id = generateId() || data.id
        this.name = data.name
    }

    get TaskTemplate(){
        return `
        <div>
       ${this.name} <i class="mdi mdi-delete selectable on-hover" title="delete" onclick="app.tasksController.removeTask('${this.id}')>
      </div>
      
        `
    }
}