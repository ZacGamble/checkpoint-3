import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.listId = data.listId
        this.checked = data.checked
    }

    get Template(){
        return `<div class="d-flex justify-content-between p-1 border-bottom">
        <input class='form-check-input me-1' name="checkbox" type ='checkbox' id="checkbox" onchange="app.tasksController.taskTrack()"<li>${this.name} <i class="mdi mdi-delete selectable on-hover pointer" title="Delete" 
        onclick="app.tasksController.removeTask('${this.id}')" minlength="3" maxlength="50"></i></li>
        </div>
        `
        
    }
}