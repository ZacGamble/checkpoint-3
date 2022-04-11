import { generateId } from "../Utils/generateId.js";
// import {taskTrack} from "../Controllers/TasksController.js"

export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.name = data.name
        this.listId = data.listId
        this.isComplete = data.isComplete || false 
    }

    get Template(){
        return `<div class="d-flex justify-content-between p-1 border-bottom">
        <input ${this.isComplete == true ? 'checked' : ''} onclick="app.tasksController.taskTrack('${this.id}')" class='form-check-input me-1' name="done" type ='checkbox' id="done" value="yes">
        <li>${this.name}
        </li>
        <i class="mdi" mdi-delete selectable on-hover pointer bg-light text-dark" title="Delete" onclick="app.tasksController.removeTask('${this.id}')" minlength="3" maxlength="50">
        </i>
        </div>
        `
        
    }
}