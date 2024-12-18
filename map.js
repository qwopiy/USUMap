import { Djikstra } from './function/djikstra.js';

let djikstra = new Djikstra();
let map = L.map('map', {
    center: [3.55800, 98.65900],
    zoom: 16
});

// data kordinat titik
const nodes = [
    [0,0],                  // 0
    [98.653229, 3.567357],  // 1
    [98.655883, 3.567310],  // 2
    [98.657529, 3.567319],  // 3
    [98.657705, 3.567314],  // 4
    [98.659556, 3.567293],  // 5
    [98.660079, 3.567290],  // 6
    [98.657707, 3.567087],  // 7
    [98.658397, 3.567075],  // 8
    [98.659559, 3.567068],  // 9
    [98.660113, 3.566557],  // 10
    [98.658386, 3.566059],  // 11
    [98.660132, 3.566040],  // 12
    [98.653170, 3.566102],  // 13
    [98.653621, 3.566083],  // 14
    [98.655935, 3.565754],  // 15
    [98.656825, 3.565808],  // 16    
    [98.657489, 3.565779],  // 17
    [98.658372, 3.565889],  // 18
    [98.657482, 3.565558],  // 19
    [98.658383, 3.565547],  // 20
    [98.657488, 3.564793],  // 21
    [98.658380, 3.564763],  // 22
    [98.658377, 3.564585],  // 23
    [98.658763, 3.564612],  // 24
    [98.657429, 3.564018],  // 25
    [98.659835, 3.563844],  // 26
    [98.660218, 3.563846],  // 27
    [98.656790, 3.563351],  // 28
    [98.658292, 3.563227],  // 29
    [98.656009, 3.562901],  // 30
    [98.656790, 3.562917],  // 31
    [98.657391, 3.562946],  // 32
    [98.658313, 3.562952],  // 33
    [98.660263, 3.563027],  // 34
    [98.653038, 3.562483],  // 35
    [98.654822, 3.562528],  // 36
    [98.656019, 3.562586],  // 37
    [98.656019, 3.562586],  // 38
    [98.659833, 3.562393],  // 39
    [98.660292, 3.562409],  // 40
    [98.654832, 3.561950],  // 41
    [98.657621, 3.561897],  // 42
    [98.658308, 3.561922],  // 43
    [98.659016, 3.561959],  // 44
    [98.660309, 3.562059],  // 45
    [98.657098, 3.561056],  // 46
    [98.657662, 3.561066],  // 47
    [98.658305, 3.561066],  // 48
    [98.659960, 3.561425],  // 49
    [98.660328, 3.561422],  // 50
    [98.659054, 3.560865],  // 51
    [98.660309, 3.560882],  // 52
    [98.652982, 3.560680],  // 53
    [98.653298, 3.560670],  // 54
    [98.655404, 3.560675],  // 55
    [98.655643, 3.560675],  // 56
    [98.655924, 3.560664],  // 57
    [98.653308, 3.560562],  // 58
    [98.655392, 3.560225],  // 59
    [98.655918, 3.560179],  // 60
    [98.656115, 3.560189],  // 61
    [98.658291, 3.560228],  // 62
    [98.660340, 3.560220],  // 63
    [98.654618, 3.559312],  // 64
    [98.660126, 3.559780],  // 65
    [98.660341, 3.559761],  // 66
    [98.652948, 3.559015],  // 67
    [98.653466, 3.559018],  // 68
    [98.654585, 3.559058],  // 69
    [98.656154, 3.559052],  // 70
    [98.657877, 3.559306],  // 71
    [98.658279, 3.559095],  // 72
    [98.660390, 3.559030],  // 73
    [98.653456, 3.558826],  // 74
    [98.655730, 3.557766],  // 75
    [98.656122, 3.557768],  // 76
    [98.656234, 3.557796],  // 77
    [98.658111, 3.557877],  // 78
    [98.658806, 3.557933],  // 79
    [98.660225, 3.558173],  // 80
    [98.660442, 3.558178],  // 81
    [98.656124, 3.557422],  // 82
    [98.656282, 3.557398],  // 83
    [98.656340, 3.557245],  // 84
    [98.658070, 3.557220],  // 85
    [98.654626, 3.556733],  // 86
    [98.657200, 3.556828],  // 87
    [98.652899, 3.556362],  // 88
    [98.654599, 3.556348],  // 89
    [98.656132, 3.556359],  // 90
    [98.657183, 3.556349],  // 91
    [98.658055, 3.556345],  // 92
    [98.660480, 3.556341],  // 93
];
// console.log(nodes);

const nodesMarker = {
    1: "Pintu 4",
    2: "Pintu 3",
    3: "Pintu 2",
    4: "Gerbang Fakultas Psikologi",
    5: "Pintu 1",
    8: "Fakultas Psikologi",
    9: "Fakultas Kedokteran",
    14: "Stadium Mini USU",
    16: "Kantor Biro USU",
    24: "Fakultas Keperawatan",
    26: "Gelanggang Mahasiswa",
    28: "Auditorium USU",
    29: "Fakultas Kedokteran Gigi",
    38: "Fakultas Teknik Kimia",
    39: "Fasilkom-TI",
    41: "Program Studi Teknik Industri USU",
    44: "USU Press",                            // tambahan
    46: "Laboratorium Beton Teknik Sipil Usu",
    49: "Gedung Pancasila",
    56: "Unit 4 FMIPA USU",
    58: "Fakultas Farmasi",
    64: "FMIPA USU",
    65: "Fakultas Ilmu Budaya",
    71: "Perpustakaan",
    74: "Magister Kehutanan",
    75: "Program Studi Manajemen Sumberdaya Perairan",
    77: "Fakultas Ekonomi Dan Bisnis",
    78: "Gedung Kuliah Bersama Haji Anif",
    79: "Gedung Baru Fakultas Hukum",
    80: "Fakultas Hukum",
    86: "Fakultas Pertanian",
    87: "Fakultas Ilmu Sosial Dan Ilmu Politik"
};

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// fungsi untuk klik map
// function onMapClick(e) {
//     console.log(myLines);
//     console.log("You clicked the map at " + e.latlng);
//     lines.remove();
//     // L.popup(e.latlng, {content: '<p>Hello world!<br />This is a nice popup.</p>'})
//     // .openOn(map);
// }

let lines;
let markers = [];
function road(arr){
    myLines = [];
    markers = [];
    let length = arr.length;
    
    markers[0] = L.marker(nodes[arr[0]].reverse(), {title: nodesMarker[arr[0]]});
    markers[0].addTo(map);
    markers[0].bindPopup(nodesMarker[arr[0]]);
    nodes[arr[0]].reverse();


    markers[length-1] = L.marker(nodes[arr[length-1]].reverse(), {title: nodesMarker[arr[length-1]]});
    markers[length-1].addTo(map);
    markers[length-1].bindPopup(nodesMarker[arr[length-1]]);
    nodes[arr[length-1]].reverse();
    
    for (let i = 0; i < length-1; i++) {
        myLines.push({
            "type": "LineString",
            "coordinates": [nodes[arr[i]], nodes[arr[i+1]]]
        });
        console.log(nodes[arr[i]], nodes[arr[i+1]]);
    }
    lines = L.geoJSON(myLines).addTo(map);
    console.log((nodes[arr[length-1]][1] + nodes[arr[0]][1])/2);
    console.log((nodes[arr[length-1]][0] + nodes[arr[0]][0])/2);
    map.panTo([(nodes[arr[length-1]][1] + nodes[arr[0]][1])/2, (nodes[arr[length-1]][0] + nodes[arr[0]][0])/2]);
}

let submit = document.getElementById('submit');
let titikAwal = document.getElementById('titikAwal');
let titikAkhir = document.getElementById('titikAkhir');

submit.addEventListener('click', function(){
    if (lines !== undefined) {
        lines.remove();
        markers.forEach(marker => {
            marker.remove();
        });
    }
    let awal = titikAwal.value;
    let akhir = titikAkhir.value;
    console.log(awal, akhir);
    let array = djikstra.djikstra(94, awal, akhir);
    console.log(array);
    setTimeout(() => {
        road(array);
    }, 1000);
});

let myLines = [];
// let array = djikstra.djikstra(94, 49, 12);
// map.on('click', onMapClick);

