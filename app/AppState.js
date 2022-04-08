import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { generateId } from "./Utils/generateId.js"
import { isValidProp } from "./Utils/isValidProp.js"

let groceries = new List({id: generateId() , name: 'groceries', color: 'purple'})
let chores = new List({id: generateId() , name: 'chores', color: 'red'})

let sweep = new Task({id: generateId(), name: 'sweep the floors'})

class AppState extends EventEmitter {
  /** @type {import('./Models/List').List[]} */
  lists = [groceries, chores]
  tasks = [sweep]
  values = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
