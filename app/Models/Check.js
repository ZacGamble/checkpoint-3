import { generateId } from "../Utils/generateId.js";

export class Check {
    constructor(data) {
        this.id = data.id || generateId()
    }
}