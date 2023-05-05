// var map = L.map('main_map', {
//     center: [10.988119, -74.789661],
//     zoom: 13
// });

// L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
// }).addTo(map)

var map = L.map("main_map").setView([6.1630788, -75.631681], 17);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://wwww.openstreetmap.org/copyright">OpenStreetMap contributors',
}).addTo(map);

L.marker([6.1573243, -75.6324465]).addTo(map);
L.marker([6.1573243, -75.6324485]).addTo(map);
// $.ajax({
//     dataType: "json",
//     url: "/bicicletas",
//     success: function(result){
//         console.log(result);
//         result.bicicletas.forEach(function(bici){
//             L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
//         });
//     }
// })