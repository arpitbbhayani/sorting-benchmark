const ArrayGenerator = require("../utils/ArrayGenerator");

const SelectionSort = require("../algorithms/SelectionSort");
const InsertionSort = require("../algorithms/InsertionSort");
const ShellSort = require("../algorithms/ShellSort");
const MergeSort = require("../algorithms/MergeSort");
const QuickSort = require("../algorithms/QuickSort");
const QuickSort3Way = require("../algorithms/QuickSort3Way");
const StdSort = require("../algorithms/StdSort");
const FlashSort = require("../algorithms/FlashSort");

const slowSorts = [
    // SelectionSort.sort,
    // InsertionSort.sort
];

const fastSorts = [
    // ShellSort.sort,
    // MergeSort.sort,
    QuickSort.sort,
    FlashSort.sort,
    // QuickSort3Way.sort,
    // StdSort.sort
];

const allSorts = slowSorts.concat(fastSorts);

let config = [];

const randomized = {
    generator: ArrayGenerator.randomizedArray,
};
const sorted = {
    generator: ArrayGenerator.sortedArray
};
const descSorted = {
    generator: ArrayGenerator.descSortedArray
};

const withElementsInRange = (min, max) => {
    return {
        range: {
            min: min,
            max: max
        }
    }
};

const size = (from, to, step = 1) => {
    return {
        size: {
            from: from,
            to: to,
            step: step
        }
    };
};

const add = function(suiteName, sortMethods, arrayOpts) {
    config.push({
        name: suiteName,
        methods: sortMethods,
        array: arrayOpts.reduce((opts, option) => {
            return {
                ...opts,
                ...option
            }
        }, {})
    })
};

/*
 * Test methods on tiny arrays
 */
add("From 0 to 100", allSorts, [
    randomized,
    withElementsInRange(0, 1000),
    size(0, 100, 5)
]);
add("From 0 To 100 Duplicate Keys", allSorts, [
    randomized,
    withElementsInRange(0, 2),
    size(0, 100, 5)
]);
add("From 0 To 100 Sorted Array", allSorts, [
    sorted,
    size(0, 100, 5)
]);
add("From 0 To 100 Sorted Array Desc", allSorts, [
    descSorted,
    size(0, 100, 5)
]);

/*
 * Test methods on small size arrays
 */
add("From 100 To 1000", allSorts, [
    randomized,
    withElementsInRange(0, 10000),
    size(100, 1000, 50)
]);
add("From 100 To 1000 Duplicate Keys", allSorts, [
    randomized,
    withElementsInRange(0, 5),
    size(100, 1000, 50)
]);
add("From 100 To 1000 Sorted Array", allSorts, [
    sorted,
    size(100, 1000, 50)
]);
add("From 100 To 1000 Sorted Array Desc", allSorts, [
    descSorted,
    size(100, 1000, 50)
]);

/*
 * Test methods on medium size arrays
 */
add("From 1000 To 10000", allSorts, [
    randomized,
    withElementsInRange(0, 100000),
    size(1000, 10000, 500)
]);
add("From 1000 To 10000 Duplicate Keys", allSorts, [
    randomized,
    withElementsInRange(0, 10),
    size(1000, 10000, 500)
]);
add("From 1000 To 10000 Sorted Array", allSorts, [
    sorted,
    size(1000, 10000, 500)
]);
add("From 1000 To 10000 Sorted Array Desc", allSorts, [
    descSorted,
    size(1000, 10000, 500)
]);

/*
 * Test methods on big size arrays
 */
add("From 10000 To 100000", fastSorts, [
    randomized,
    withElementsInRange(0, 1000000),
    size(10000, 100000, 5000)
]);
add("From 10000 To 100000 Duplicate Keys", fastSorts, [
    randomized,
    withElementsInRange(1, 20),
    size(10000, 100000, 5000)
]);
add("From 10000 To 100000 Sorted Array", fastSorts, [
    sorted,
    size(10000, 100000, 5000)
]);
add("From 10000 To 100000 Sorted Array Desc", fastSorts, [
    descSorted,
    size(10000, 100000, 5000)
]);

/*
 * Test only fast methods on large arrays
 */
add("From 100000 to 1000000", fastSorts, [
    randomized,
    withElementsInRange(0, 10000000),
    size(100000, 1000000, 50000)
]);
add("From 1000000 to 10000000", fastSorts, [
    randomized,
    withElementsInRange(0, 100000000),
    size(1000000, 10000000, 1000000)
]);

module.exports = config;
