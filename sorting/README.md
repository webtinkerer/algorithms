## Sorting Algorithms
[Sorting algorithms][sorting-algorithm] are one of the cornerstones of computer science.  They play a major role in commercial data processing and in modern scientific computing. Their importance lies in the fact that search process of any data can be drastically optimized to a very high level if this data is originally sorted. But not all [sorting algorithms][sorting-algorithm] are equally efficient, one may be efficient only under some circumstances while other may be useful only for educational purposes. 

### Introduction
First of all, let's start with the definition what is [sorting][]:

> [Sorting][] is the process of rearranging a sequence of items so as to put them in some logical order. It can be numerical, [lexicographical][] order or some custom defined one. 

And if you will look around you will see that actually [sorting][] is used everywhere, almost all information that you deal with on day-to-day manner is somehow ordered.

Let's see few examples:

* **Dictionary**  
Any dictionary lists words in an alphabetical order so that searching of any word becomes much easier and fast.
    
* **Student Records**  
Students records are always displayed in some order too. It can be lexicographical order to have the list of students entered the class. It can be order based on student rank after final exams. 

* **Shopping Catalogue**  
Usually, all product lists are shown ordered by some attribute. It can be the popularity among other customers, it can be the price - from the cheapest to most expensive or vice versa, it can be the play date - for theater, cinema tickets, etc.  
    
* **ToDo Lists**  
Well, these items, in theory, should be listed based on their priority - the most important ones go first (I said in theory!). 
    
That is why an efficient [sorting algorithm][sorting-algorithm] is a very important thing. I have doubts that you would agree to wait 5 minutes to sort products by price or cinema tickets by play time. But this is only one side. The other side is that from computer science an efficient [sorting algorithm][sorting-algorithm] is very important for optimizing the use of other algorithms that would not be so efficient or even developed without [sorting].

### Classification
As you have already guessed there are lots of [sorting algorithms][sorting-algorithm] and to prevent being lost in such complicated *"sorting"* world, let's define major attributes that can be applied to any [sorting algorithm][sorting-algorithm] . This will also help us compare algorithms between each other later.

#### Stable and Not Stable
Each [sorting algorithm][sorting-algorithm] can be either *stable* or *not stable* but not both at once.

* **Stable Algorithm**  
A stable [sorting algorithm][sorting-algorithm] **does** maintain the relative order of the elements with equal values. It means that during sorting such algorithm won't rearrange equals elements relative to each other.

* **Not Stable Algorithm**  
A not stable [sorting algorithm][sorting-algorithm] in its turn **does not** maintain the relative order of the elements with equal values. It means that during sorting such algorithm may rearrange equal elements relative to each other.

#### In-Place and Not In-Place
This attribute defines whether a [sorting algorithm][sorting-algorithm] needs the auxiliary amount of memory to store copied versions of an initial array or not.

* **In-Place Algorithm**  
It means that such [sorting algorithm][sorting-algorithm] **does not** need to store copies of the initial array to complete its work, but may still need the permanent amount of memory to store function stack or some specific array elements. The key is that amount of memory that this algorithm needs additionally is **permanent** and **does not** depend on array size.

* **Not In-Place Algorithm**  
It means that such [sorting algorithm][sorting-algorithm] in its turn **does** need auxiliary memory to store copies of the initial array (or sub-arrays of the initial array) to complete its work. It means that such algorithm **does** depend on initial array size.

#### Adaptive and Non-Adaptive
It's another attribute defines how [sorting algorithm][sorting-algorithm] performs when the array is partially sorted, will algorithm take this fact into account or not.

* **Adaptive Algorithm**  
A [sorting algorithm][sorting-algorithm] is said to be *adaptive* if it **does** take advantage of the partially sorted array. This means that such algorithm will try not to touch already sorted elements and sort only the rest ones, thus, decreasing its execution time.

* **Non-Adaptive Algorithm**  
A [sorting algorithm][sorting-algorithm] is said to be *non-adaptive* if it **does not** take into account the elements that are already sorted. This means that such algorithm will behaviour like the array is absolutely unsorted and will try to force each single element to be put in the proper place.

#### Recursive and Non-Recursive
This attribute is very simple, all that it means is that should algorithm be implemented using [recursion][] or not, or may it be implemented in both ways with no difference to its correctness.

#### Comparison and Non-Comparison
This attribute defines whether or not a [comparison sort][] is used. 

* **Comparison Algorithm**  
A *comparison* [sorting algorithm][sorting-algorithm] examines elements in the array **only** by comparing two elements with a **comparison operator**. 
* **Non-Comparison Algorithm**  
A *non-comparison* [sorting algorithms][sorting-algorithm] **does not** use a **comparison** operator to examine elements and put them in a proper order, it rather uses some arithmetic operators, element pre-processing, etc. 

### Important terms
As we have learned by this moment the objective of [sorting][] is to rearrange items in some order. But what is this order?

In computer science [order][] of items means that these items are placed in sequence based on the selected rule. Based on this rule one can usually define the following [orders][order] of items: 

* **Increasing / Non-Increasing Order**  
A sequence of elements is said to be in an *increasing order* if the next following element is greater that the previous one. For instance, 1, 2, 3, 4. This order occurs when the sequence contains only unique values. If the sequence does contain duplicate values, for instance, 1, 2, 2, 3, 4, it's in a *non-increasing order*. The only difference is that the next following element may be equal to the previous one.

* **Decreasing / Non-Decreasing Order**  
A sequence of elements is said to be in an *decreasing order* if the next following element is less that the previous one. For instance, 4, 3, 2, 1. This order occurs when the sequence contains only unique values. If the sequence does contain duplicate values, for instance, 4, 3, 2, 2, 1, it's in a *non-decreasing order*. The only difference is that the next following element may be equal to the previous one.

### Our Goal
Keep in mind that our goal is not only to learn dozens of different ways to sort data. The goal is to learn how to select the most efficient way among dozens of them. 

First of all [sorting algorithms][sorting-algorithm] are used as a tool to study the [analysis of algorithms][]. It's very important to understand how to calculate the complexity of the each algorithm, its order of growth, cost model and execution time, and to know pros/cons for practical usage.

There are multiple ways to solve a single problem, and we need to learn to choose wisely!

Let's get started!

**Next Articles**:  
[Comparison Sort Algorithms](comparison-sort/README.md "Comparison Sort Algorithms")

[sorting-algorithm]: https://en.wikipedia.org/wiki/Sorting_algorithm "Sorting Algorithm - Wikipedia"
[sorting]: https://en.wikipedia.org/wiki/Sorting "Sorting - Wikipedia"
[comparison sort]: https://en.wikipedia.org/wiki/Comparison_sort "Comparison Sort - Wikipedia"
[order]: https://en.wikipedia.org/wiki/Order "Order - Wikipedia"
[lexicographical]: https://en.wikipedia.org/wiki/Lexicographical_order "Lexicographical Order - Wikipedia"
[recursion]: https://en.wikipedia.org/wiki/Recursion "Recursion - Wikipedia"
[analysis of algorithms]: https://en.wikipedia.org/wiki/Analysis_of_algorithms "Analysis of Algorithms - Wikipedia"
