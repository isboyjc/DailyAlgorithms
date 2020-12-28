/*
 * @Author: isboyjc
 * @Date: 2020-12-28 21:21:15
 * @LastEditors: isboyjc
 * @LastEditTime: 2020-12-28 21:22:03
 * @Description: 测试链表 & 数组性能
 */

let { LinkedList } = require("./LinkedList")

let linkedList = new LinkedList()
let arr = []

// 测试 分别尝试 「总数100 插入节点50」/「总数100000 插入节点50000」
let count = 100
let insertIndex = 50
// let count = 100000
// let insertIndex = 50000

console.time('链表push操作')
for (let i = 0; i < count; i++) {
  linkedList.append(i)
}
console.timeEnd('链表push操作')

console.time('数组push操作')
for (let i = 0; i < count; i++) {
  arr.push(i)
}
console.timeEnd('数组push操作')


console.time('链表insert操作')
linkedList.insert('test节点', insertIndex)
console.timeEnd('链表insert操作')

console.time('数组insert操作')
arr.splice(insertIndex, 0, 'test节点')
console.timeEnd('数组insert操作')


console.time('链表remove操作')
linkedList.removeAt(insertIndex)
console.timeEnd('链表remove操作')

console.time('数组remove操作')
arr.splice(insertIndex, 1)
console.timeEnd('数组remove操作')