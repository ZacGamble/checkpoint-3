import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

let groceries = new List({name: 'Groceries', color: 'purple'})
let chores = new List({name: 'Chores', color: 'red'})

class AppState extends EventEmitter {
  /** @type {import('./Models/List').List[]} */

  lists = [groceries, chores]

  /**@type {import ('./Models/Task').Task[]} */
  tasks = []  
  // checks = []
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
