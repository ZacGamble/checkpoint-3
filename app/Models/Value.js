import { generateId } from "../Utils/generateId.js"

export class Value {
  constructor(data) {
    this.id = data.id || generateId()
    
  }

  get CardTemplate() {
    return /*html*/`
    `
  }
}
