const assert = require("assert");
const InsertionSort = require("../../../src/benchmark/algorithms/InsertionSort");
const MergeSort = require("../../../src/benchmark/algorithms/MergeSort");
const QuickSort = require("../../../src/benchmark/algorithms/QuickSort");
const QuickSort3Way = require("../../../src/benchmark/algorithms/QuickSort3Way");
const SelectionSort = require("../../../src/benchmark/algorithms/SelectionSort");
const ShellSort = require("../../../src/benchmark/algorithms/ShellSort");
const StdSort = require("../../../src/benchmark/algorithms/StdSort");
const FlashSort = require("../../../src/benchmark/algorithms/FlashSort");

const sortMethods = [
    InsertionSort.sort,
    MergeSort.sort,
    QuickSort.sort,
    QuickSort3Way.sort,
    SelectionSort.sort,
    ShellSort.sort,
    StdSort.sort,
    FlashSort.sort,
];

sortMethods.forEach((sortMethod) => {

    describe(sortMethod.name, function() {

        describe("#sort(array)", function() {

            const array = [25, 34, 29, 65, 10, 5, 7];

            it("should return array of the same size", function() {
                assert.equal(sortMethod(array.slice(0)).length, array.length)
            });

            it("should return array with the same elements", function() {
                const sortedArray = sortMethod(array.slice(0));

                assert.equal(sortedArray.filter((element) => {
                    return array.indexOf(element) < 0
                }).length, 0);
            });

            it("should return array sorted in ascending order", function() {
                const sortedArray = sortMethod(array.slice(0));

                for(let i = 1; i < sortedArray.length; i++) {
                    assert(sortedArray[i] > sortedArray[i - 1]);
                }
            });

        });

    });

});
