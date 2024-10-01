function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallestElement = arr[i];
        let smallestElementIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < smallestElement) {
                smallestElement = arr[j];
                smallestElementIndex = j;
            }
        }

        if (i != smallestElementIndex) {
            const temp = arr[i];
            arr[i] = smallestElement;
            arr[smallestElementIndex] = temp;
        }
    }
}

const arr = [1, -3, 7, -70, -1000, 1000, 99, 195, -206];

selectionSort(arr);

console.log(arr);