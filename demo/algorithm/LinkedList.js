/*
 * @Author: isboyjc
 * @Date: 2020-12-27 00:05:55
 * @LastEditors: isboyjc
 * @LastEditTime: 2020-12-28 21:24:00
 * @Description: 「算法与数据结构」JavaScript中的链表 单向链表设计案例
 * @Article: https://github.com/isboyjc/blog/issues/29
 * @GitHub: https://github.com/isboyjc/DailyAlgorithms
 */

module.exports = {
  LinkedList
}

/**
 * @description: 创建链表单节点类
 * @param {*} val 节点值
 * @return {*}
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @description: 创建链表类
 * @param {*}
 * @return {*}
 */
function LinkedList() {
  this.length = 0
  this.head = null
}

// 向链表中追加节点
LinkedList.prototype.append = function (val) {
  let node = new ListNode(val)

  if (!this.head) {
    this.head = node
  } else {
    let cur = this.getElementAt(this.length - 1)
    cur.next = node
  }
  this.length++
}

// 在链表的指定位置插入节点
LinkedList.prototype.insert = function (index, val) {
  if (index < 0 || index > this.length) return false

  let node = new ListNode(val)

  if (index === 0) {
    node.next = this.head
    this.head = node
  } else {
    let prev = this.getElementAt(index - 1)
    node.next = prev.next
    prev.next = node
  }

  this.length++
  return true
}

// 删除链表中指定位置的元素，并返回这个元素的值
LinkedList.prototype.removeAt = function (index) {
  if (index < 0 || index >= this.length) return null

  let cur = this.head

  if (index === 0) {
    this.head = cur.next
  } else {
    let prev = this.getElementAt(index - 1)
    cur = prev.next
    prev.next = cur.next
  }

  this.length--
  return cur.val
}

// 删除链表中对应的元素
LinkedList.prototype.remove = function (val) {
  let index = this.indexOf(val)
  return this.removeAt(index)
}

// 获取链表中给定元素的索引
LinkedList.prototype.indexOf = function (val) {
  let cur = this.head

  for (let i = 0; i < this.length; i++) {
    if (cur.val === val) return i
    cur = cur.next
  }

  return -1
}

// 获取链表中索引所对应的元素
LinkedList.prototype.getElementAt = function (index) {
  if (index < 0 || index >= this.length) return null

  let cur = this.head
  while (index--) {
    cur = cur.next
  }
  return cur
}

// 获取链表中某个节点
LinkedList.prototype.find = function (val) {
  let cur = this.head
  while (cur) {
    if (cur.val == val) return cur
    cur = cur.next
  }
  return null
}

// 判断链表是否为空
LinkedList.prototype.isEmpty = function () {
  return !this.length
}

// 获取链表的长度
LinkedList.prototype.size = function () {
  return this.length
}

// 获取链表的头元素
LinkedList.prototype.getHead = function () {
  return this.head
}

// 清空链表
LinkedList.prototype.clear = function () {
  this.head = null
  this.length = 0
}

// 序列化链表
LinkedList.prototype.jion = function (string) {
  let cur = this.head
  let str = ''
  while (cur) {
    str += cur.val

    if (cur.next) str += string

    cur = cur.next
  }
  return str
}


// let linkedList = new LinkedList()
// linkedList.append(10)
// linkedList.append(20)
// linkedList.append(30)

// console.log(linkedList.jion("--"))

// linkedList.insert(0, 5)
// linkedList.insert(2, 15)
// linkedList.insert(4, 25)
// console.log(linkedList.jion("--"))

// console.log(linkedList.removeAt(0))
// console.log(linkedList.removeAt(1))
// console.log(linkedList.removeAt(2))
// console.log(linkedList.jion("--"))

// console.log(linkedList.indexOf(20))

// linkedList.remove(20)

// console.log(linkedList.jion("--"))

// console.log(linkedList.find(10))

// linkedList.clear()
// console.log(linkedList.size())

// 10--20--30
// 5--10--15--20--25--30
// 5
// 15
// 25
// 10--20--30
// 1
// 10--30
// ListNode { val: 10, next: ListNode { val: 30, next: null } }
// 0