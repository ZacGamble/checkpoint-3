import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(data) {
        this.id = generateId() || data.id
        this.name = data.name
        this.listId = data.listId
        this.length = data.length
    }

    get Template(){
        return `<li class=""><input type="checkbox">${this.name} <i class="mdi mdi-delete selectable on-hover pointer" title="Delete" 
        onclick="app.tasksController.removeTask('${this.id}')" minlength="3" maxlength="50"></i></li>
        `
        
    }
}