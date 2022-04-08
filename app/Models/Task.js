import { generateId } from "../Utils/generateId.js";

export class Task {
    constructor(data) {
        this.name = data.name
    }

    get TaskTemplate(){
        return `
        <div>
        <input name="task" id="task" class="my-2" type="checkbox">
        <label for="task">${this.name}</label>
      </div>
      
        `
    }
}