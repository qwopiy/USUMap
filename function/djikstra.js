import { PriorityQueue } from "./binaryHeap.js";

export class Djikstra {
    constructor() {
        this.graf = new Array();
        // this.filter = [ [1, 2], [2, 15], [3, 4], 
        //                 [4, 5], [5, 6], [15,30], 
        //                 [17, 3], [19, 17], [21, 19], 
        //                 [25, 21], [32, 25]];
        // this.nodes(this.filter);
    }
    // let jumlahTitik = 94;
    // let titikAwal = 1;
    // let titikTujuan = 33;

    nodes(filter, newFilter){
        let arr = [
            [1, 2, 293], [1, 13, 135], [2, 3, 160], [2, 15, 174], [3, 4, 19], [3, 17, 183], [4, 5, 261], [4, 7, 26], [5, 6, 59], [5, 9, 29],
            [6, 10, 85], [7, 8, 78], [8, 11, 59], [10, 12, 59], [11, 12, 193], [11, 18, 19], [12, 27, 244], [13, 14, 47], [13, 35, 431],
            [15, 16, 95], [15, 30, 313], [16, 17, 75], [17, 19, 38], [18, 20, 38], [19, 21, 86], [20, 22, 88], [21, 22, 102], [21, 25, 87], [22, 23, 21], 
            [23, 24, 45], [25, 32, 119], [26, 27, 23], [27, 34, 92], [28, 31, 51], [29, 33, 32], [30, 31, 83], [30, 37, 35], [31, 32, 63], [31, 38, 19],
            [32, 33, 101], [33, 34, 212], [33, 43, 119], [34, 40, 68], [35, 36, 191], [35, 53, 198], [36, 37, 134], [36, 41, 60], [37, 61, 302], [39, 40, 23], 
            [40, 45, 39], [42, 43, 76], [42, 47, 91], [43, 44, 88], [43, 48, 92], [44, 51, 124], [45, 50, 71], [46, 47, 69], [48, 62, 95], [49, 50, 33], 
            [50, 52, 68], [52, 63, 63], [53, 54, 31], [53, 67, 180], [54, 55, 233], [54, 58, 13], [55, 56, 28], [55, 59, 52], [56, 57, 30], [57, 60, 54],
            [59, 60, 57], [60, 61, 10], [61, 70, 127], [62, 72, 99], [63, 66, 52], [64, 69, 27], [65, 66, 26], [66, 73, 83], [67, 68, 56], [67, 88, 293],
            [68, 69, 123], [68, 74, 21], [69, 70, 174], [70, 76, 143], [71, 72, 37], [72, 73, 224], [73, 81, 97], [75, 76, 45], [76, 77, 15], [76, 82, 37],
            [78, 79, 100], [78, 85, 154], [80, 81, 25], [81, 93, 205], [82, 83, 25], [82, 90, 121], [83, 84, 22], [84, 85, 197], [85, 92, 98], [86, 89, 46],
            [87, 91, 25], [88, 89, 186], [89, 90, 168], [90, 91, 122], [91, 92, 87], [92, 93, 268]        
        ]

        for (let i = 0; i < 94; i++){
            this.graf[i] = [];
        }

        for(let i = 0; i < arr.length; i++){
            if(!newFilter.includes(arr[i][0]) && !newFilter.includes(arr[i][1])){
                this.graf[arr[i][0]].push([arr[i][1], arr[i][2]]);
                this.graf[arr[i][1]].push([arr[i][0], arr[i][2]]);
                // console.log(i)
            }
            
        }

        for(let i = 0; i < 94; i++){
            for(let j=0; j<this.graf[i].length; j++){
                let jalurTutup = [i, this.graf[i][j][0]];
                if(filter.some(item => JSON.stringify(item) === JSON.stringify(jalurTutup))){ 
                    this.graf[i].splice(j, 1);
                    j--;
                }
            }
        }

        // for(let i = 0; i < 94; i++){
        //     console.log(newFilter.includes(arr[i][0]))
        //     // console.log(i);
        //     console.log(arr[i][0]);
        //     console.log(this.graf[arr[i][0]]);
        //     console.log('');
        // }
    }

    djikstra(jumlahTitik, titikAwal, titikTujuan, newFilter){
        let filter = [ [1, 2], [2, 15], [3, 4], 
                        [4, 5], [5, 6], [15,30], 
                        [17, 3], [19, 17], [21, 19], 
                        [25, 21], [32, 25]];
        this.nodes(filter, newFilter);

        let jarak = new Array(jumlahTitik).fill(Infinity);
        jarak[titikAwal] = 0;

        let antrian = new PriorityQueue();
        antrian.insert([[titikAwal], 0]);

        while(antrian.length != 0){
            let jalurSeluruhnya = antrian.heap[0][0];
            // console.log(antrian.heap[0][0]);
            let titikSekarang = jalurSeluruhnya.slice(-1)[0];
            let jarakSekarang = antrian.heap[0][1];
            antrian.extractMin();
            
            if(titikSekarang == titikTujuan){
                return jalurSeluruhnya;
            }
            
            if(jarakSekarang > jarak[titikSekarang]){
                continue;
            }

            // if(this.graf[titikSekarang].length == 0){
            //     return 0;
            // }
            
            for(const tetangga of this.graf[titikSekarang]){
                let titikBerikut = tetangga[0];
                let jarakTempuh = tetangga[1];
                let jarakBaru = jarakSekarang + jarakTempuh;
                let jalurBerikut = [];
                jalurBerikut.push(...jalurSeluruhnya);
                jalurBerikut.push(titikBerikut);

                if(jarakBaru < jarak[titikBerikut]){
                    jarak[titikBerikut] = jarakBaru;
                    antrian.insert([jalurBerikut, jarakBaru]);
                }
            }
        }
        return 0;
    }

    
    // console.log(djikstra(jumlahTitik, titikAwal, graf));
}

let temp = new Djikstra();
// console.log(temp.djikstra(94, 1, 33, [36]));





 

