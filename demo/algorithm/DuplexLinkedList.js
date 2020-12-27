/*
 * @Author: isboyjc
 * @Date: 2020-12-27 00:05:55
 * @LastEditors: isboyjc
 * @LastEditTime: 2020-12-27 23:12:10
 * @Description: 「算法与数据结构」JavaScript中的链表 双向链表设计案例
 * @Article: https://github.com/isboyjc/blog/issues/29
 * @GitHub: https://github.com/isboyjc/DailyAlgorithms
 */

/**
 * @description: 创建双向链表单节点类
 * @param {*} val 节点值
 * @return {*}
 */
function ListNode(val) {
  this.val = val
  this.next = null
  this.prev = null
}

/**
 * @description: 创建双向链表类
 * @param {*}
 * @return {*}
 */
function LinkedList() {
  this.length = 0
  this.head = null
}
