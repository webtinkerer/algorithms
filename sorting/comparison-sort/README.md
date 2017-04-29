## Comparison Sort Algorithms
Our journey with [comparison sort][] algorithms begins. But before moving to details of algorithm implementation and analysis, let's spend a minute discussing our *rules of the game*.

### Rules of the Game
By this moment we have learned that the objective of [sorting][] is to rearrange items in some order, and there are two major ways how items can be rearranged - *ascending* and *descending*. 

So let's assume that by default our task is always to sort elements of the array in **ascending order** (means [non-decreasing order][]), unless the other order is indicated. And from algorithm implementation, it does not really matter what type array elements are, but for simplification let's assume that it is **integer** values.    

### Cost model
To compare different [sorting algorithms][sorting-algorithm] between each other we obviously need some techniques to measure their performance. By this moment we have learned that [comparison sort][] algorithms use a *comparison operator* to accomplish the task. 

Truly saying such algorithms need to perform a lot of comparisons in order to correctly sort an array. So we can use this operator to calculate the cost of each algorithm - more effective algorithm would do less number of comparisons. 

To calculate the cost of each algorithm, we will count the number of **compares** and **swaps**. For algorithms that don't use *swaps*, we will count **array accesses**. Thus, we will compare all [comparison sort][] algorithms by comparing these metrics.

### Basic Operations
In almost all [sorting algorithms][sorting-algorithm] that we will look at in this tutorial we will use two basic operations:

* [compare two elements between each other](#compare-elements-between-each-other);
* [swap two elements in the array](#swap-elements-in-the-array).

For simplification, let's create for these two operations small auxiliary routines that will be used across all our [sorting algorithms][sorting-algorithm] implementations.

#### Compare elements between each other
Here we will check whether the first element is less than the second element:
```javascript
function less(a, b) {
    return a < b;
}
```

#### Swap elements in the array
Here we will use a temporary variable to swap two elements of the array by specified array indices:
 ```javascript
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
 ```

### Invariants
In computer science, an invariant is a condition that can be relied upon to be true during execution of a program. It is a logical assertion that is held to always be true during a certain phase of execution. We will use invariants during algorithm design, implementation and, finally, to check the result of the sorting. 

First of all, for each algorithm, we will define some loop invariants that should be always true at the beginning and end of each array element iteration. This will help us verify the algorithm correctness during its implementation and execution.

Finally, as the last step we will always run the following routine to verify that our input array is truly sorted at the end:
```javascript
function sorted(array) {
    var n = array.length, 
        i;
  
    for (i = 1; i < n; i++) {
        if (less(array, i, i - 1)) {
            return false;
        }
    }

    return true;
}
```

### Most Popular Algorithms
Here is the list of [comparison sort][] algorithms that we will learn in this tutorial. It is also the list of most popular [comparison sort][] algorithms in computer science that every engineer should probably know to be successful:

 * [Bubble Sort][]  
 Exchange two adjacent elements if they are out of order, repeat until the array is sorted.
 * [Selection sort][]  
 Select next smallest element in the array and swap it with the current value, repeat for all elements in the array.
 * [Insertion sort][]  
 Insert next element in the proper place of the sequence of already scanned elements, repeat for all elements in the array.
 * [Merge sort][]  
 Divide array of elements into two parts, sort two parts individually and then merge them together.
 * [Quick sort][]  
 Choose a pivot value and partition the array into two segments based on it, repeat the process for two segments recursively.
 * [Heap sort][]  
 TBD

It's not the full list of all developed [sorting algorithms][sorting-algorithm] on the Earth, there are tons of them. But it is a good one to start, what do you think? 

[sorting-algorithm]: https://en.wikipedia.org/wiki/Sorting_algorithm "Sorting Algorithm - Wikipedia"
[sorting]: https://en.wikipedia.org/wiki/Sorting "Sorting - Wikipedia"
[comparison sort]: https://en.wikipedia.org/wiki/Comparison_sort "Comparison Sort - Wikipedia" 
[non-decreasing order]: ../README.md#important-terms
[Bubble Sort]: bubble-sort/README.md
[Selection Sort]: selection-sort/README.md
[Insertion Sort]: insertion-sort/README.md
[Merge Sort]: merge-sort/README.md
[Quick Sort]: quick-sort/README.md
[Heap Sort]: heap-sort/README.md
