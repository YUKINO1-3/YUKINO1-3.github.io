---
title: 理解冒泡排序
summary: 从相邻元素交换出发，解释冒泡排序的过程、正确性与复杂度。
slug: understanding-bubble-sort
date: 2026-09-05
lifecycle: draft
subject: Computer Science
media:
  - Written explanation
  - Code
capabilities:
  - Builds a computational model
---

> **草稿说明：** 本文同时用于检查 Note 的 Markdown 排版。内容确认无误并改写为自己的表达后，再将生命周期改为 `review`。

## 问题与直觉

冒泡排序（Bubble Sort）通过反复比较**相邻元素**，把顺序错误的一对交换过来。较大的元素会像气泡一样逐渐移动到数组末端。

如果目标是升序排列，那么一次完整遍历结束后，当前未排序部分的最大值一定已经到达正确位置。这个结论是理解算法的关键不变量。

> 每轮遍历不需要一次完成全部排序；它只需要把一个确定的最大值送到未排序区间的末尾。

## 逐轮过程

以数组 `[5, 1, 4, 2]` 为例，第一轮会依次发生：

1. 比较 `5` 和 `1`，交换，得到 `[1, 5, 4, 2]`。
2. 比较 `5` 和 `4`，交换，得到 `[1, 4, 5, 2]`。
3. 比较 `5` 和 `2`，交换，得到 `[1, 4, 2, 5]`。

第一轮结束后，`5` 已经位于最终位置。下一轮只需处理它左侧的元素。

需要特别留意以下输入：

- 空数组或只有一个元素的数组；
- 已经有序的数组；
- 包含重复元素的数组；
- 按完全相反顺序排列的数组。

## 实现

```ts
export function bubbleSort(values: number[]): number[] {
  const result = [...values];

  for (let end = result.length - 1; end > 0; end -= 1) {
    let swapped = false;

    for (let index = 0; index < end; index += 1) {
      if (result[index] > result[index + 1]) {
        [result[index], result[index + 1]] = [result[index + 1], result[index]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return result;
}
```

这里先用扩展语法 `[...]` 复制输入数组，避免修改调用者的数据。变量 `end` 表示尚未排序区间的右边界，而 `swapped` 用于在数组已经有序时提前结束。

也可以用行内代码表达一次调用：`bubbleSort([5, 1, 4, 2])` 应返回 `[1, 2, 4, 5]`。

## 为什么算法正确

在一轮比较中，只要左侧元素更大，它就会向右交换。未排序区间中的最大元素不可能被更大的元素挡住，因此它会一直向右移动，最终到达该区间末端。

每轮结束后：

- 右侧已经确定的区间保持有序；
- 新增一个元素进入最终位置；
- 未排序区间的长度减少一。

重复这一过程，未排序区间最终缩小到一个元素，整个数组便完成排序。

## 复杂度与边界情况

| 情况 | 时间复杂度 | 原因 |
| --- | --- | --- |
| 最好情况 | $O(n)$ | 输入已有序，第一轮没有交换并提前结束 |
| 平均情况 | $O(n^2)$ | 通常需要多轮相邻比较 |
| 最坏情况 | $O(n^2)$ | 逆序输入会触发最多的比较和交换 |

复制数组需要 $O(n)$ 的额外空间。如果允许直接修改输入数组，则交换过程本身只需要 $O(1)$ 的额外空间。

---

## 延伸阅读

可以参考 [MDN 对 JavaScript 数组的介绍](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)，进一步了解数组复制、索引访问和原地修改的区别。

## 我的思考

_待填写：用自己的语言记录最困难的部分、验证方法，以及冒泡排序与其他排序算法的比较。_
