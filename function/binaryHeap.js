export class PriorityQueue {
  constructor() {
    this.heap = [];
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  insert(value) {
    this.heap.push(value);
    let index = this.heap.length - 1;

    while (index > 0 && this.heap[index][1] < this.heap[this.getParentIndex(index)][1]) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;

    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();

    let index = 0;
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      let smallest = index;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex][1] < this.heap[smallest][1]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex][1] < this.heap[smallest][1]) {
        smallest = rightChildIndex;
      }

      if (smallest !== index) {
        this.swap(index, smallest);
        index = smallest;
      } else {
        break;
      }
    }

    return root;
  }
}

// const pq = new PriorityQueue();
// pq.insert([3, 1]);
// pq.insert([2, 2]);
// pq.insert([4, 5]);
// pq.insert([1, 9]);
// console.log(pq.heap[0]);

// console.log(pq.extractMin()); // Output: 1
// console.log(pq.extractMin()); // Output: 2
// console.log(pq.heap[0]);