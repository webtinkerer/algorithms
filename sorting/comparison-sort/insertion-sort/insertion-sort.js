/*
 * Implementation of the Insertion Sort algorithm using JavaScript programming language.
 * Copyright (c) 2016 Quteron
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 * and associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */
(function () {
    /**
     * Moves element by its index to one position to the right.
     * @param {Array} array original array
     * @param {int} i index of the first element to swap
     * @return {void}
     */
    function shiftRight(array, i) {
        array[i + 1] = array[i];
    }

    /**
     * Checks whether first passed element is less than second passed element.
     * @param {int} a first element to compare
     * @param {int} b second element to compare
     * @returns {boolean} if true if first element is less than second, otherwise - false.
     */
    function less(a, b) {
        return a < b;
    }

    /**
     * Checks whether passed array is sorted.
     * @param {Array} array to be checked
     * @param {int} lo index of the first element to be sorted
     * @param {int} hi index of the last element to be sorted
     * @returns {boolean} if true if array is sorted, otherwise - false.
     */
    function sorted(array, lo, hi) {
        var n = array.length,
            i;

        if (lo === undefined) {
            lo = 0;
        }

        if (hi === undefined) {
            hi = n - 1;
        }

        for (i = lo; i <= hi; i++) {
            if (less(array[i], array[i - 1])) {
                return false;
            }
        }

        return true;
    }

    /**
     * Sorts in-place an array using insertion sort algorithm.
     * @param {Array} array original array to be sort
     * @param {int} lo index of the first element to be sorted
     * @param {int} hi index of the last element to be sorted
     * @return {Array} sorted array
     */
    function sort(array, lo, hi) {
        var n = array.length,
            i, j, temp;

        if (lo === undefined) {
            lo = 0;
        }

        if (hi === undefined) {
            hi = n - 1;
        }

        for (i = lo + 1; i <= hi; i++) {
            temp = array[i];

            for (j = i - 1; j >= lo && less(temp, array[j]); j--) {
                shiftRight(array, j);
            }

            array[j + 1] = temp;
        }

        return array;
    }

    var a1 = [5, 2, 1, 3, 4];
    sort(a1);
    console.log(sorted(a1));
    console.log(a1); // [1, 2, 3, 4, 5]

    var a2 = [5, 2, 1, 3, 4];
    sort(a2, 1, 3);
    console.log(a2); // [5, 1, 2, 3, 4]
}());
