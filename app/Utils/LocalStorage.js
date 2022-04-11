
import { ProxyState } from "../AppState.js"
import { Check } from "../Models/Check.js"
import { List } from "../Models/List.js"
import { Task } from "../Models/Task.js"


export function saveState() {
  let data = {
    lists: ProxyState.lists,
    tasks: ProxyState.tasks,
    // checks: ProxyState.checks
  }
  window.localStorage.setItem('TaskMaster', JSON.stringify(data))
}


export function loadState() {
  let data = window.localStorage.getItem('TaskMaster')
  if (data) {
    let obj = JSON.parse(data)
    ProxyState.lists = obj.lists.map(l => new List(l))
    ProxyState.tasks = obj.tasks.map(t => new Task(t))
    // ProxyState.checks = obj.checks.map(c => new Check(c))
  }
}