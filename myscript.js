// https://github.com/claudeni1983/mapa_example.git
$(document).ready(function(){

    const posicoes = [[-24.03052,-46.52589],[-24.00671,-46.41355]];

    const map = L.map('map').setView(posicoes[0], 16);
    const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 19
    });

    layer.addTo(map);

    const begMark = L.marker(posicoes[0]);
    begMark.addTo(map);

    const endMark = L.marker(posicoes[posicoes.length - 1]);
    endMark.addTo(map);

/*  const polyline = L.polyline(positions,{color:'#F00'})
    polyline.addTo(map)    
*/
});