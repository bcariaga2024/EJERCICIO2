ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([601749.904010, 5882617.325535, 749935.132202, 5960628.087376]);
var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_POLIG_ATRACT_1 = new ol.format.GeoJSON();
var features_POLIG_ATRACT_1 = format_POLIG_ATRACT_1.readFeatures(json_POLIG_ATRACT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_POLIG_ATRACT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIG_ATRACT_1.addFeatures(features_POLIG_ATRACT_1);
var lyr_POLIG_ATRACT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POLIG_ATRACT_1, 
                style: style_POLIG_ATRACT_1,
                popuplayertitle: 'POLIG_ATRACT',
                interactive: true,
    title: 'POLIG_ATRACT<br />\
    <img src="styles/legend/POLIG_ATRACT_1_0.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/POLIG_ATRACT_1_1.png" /> Estadio Municipal Ester Roa Rebolledo<br />\
    <img src="styles/legend/POLIG_ATRACT_1_2.png" /> Laguna Las Tres Pascualas<br />\
    <img src="styles/legend/POLIG_ATRACT_1_3.png" /> Laguna Lo Galindo<br />\
    <img src="styles/legend/POLIG_ATRACT_1_4.png" /> Laguna Redonda<br />\
    <img src="styles/legend/POLIG_ATRACT_1_5.png" /> Parque Bicentenario<br />\
    <img src="styles/legend/POLIG_ATRACT_1_6.png" /> Parque Ecuador<br />\
    <img src="styles/legend/POLIG_ATRACT_1_7.png" /> Playa El Morro<br />\
    <img src="styles/legend/POLIG_ATRACT_1_8.png" /> Playa Penco<br />\
    <img src="styles/legend/POLIG_ATRACT_1_9.png" /> Plaza de la Indepencia de Concepción<br />\
    <img src="styles/legend/POLIG_ATRACT_1_10.png" /> Plaza Perú<br />\
    <img src="styles/legend/POLIG_ATRACT_1_11.png" /> Sendero Concepción<br />\
    <img src="styles/legend/POLIG_ATRACT_1_12.png" /> <br />' });
var format_PUNTO_ATRACT_2 = new ol.format.GeoJSON();
var features_PUNTO_ATRACT_2 = format_PUNTO_ATRACT_2.readFeatures(json_PUNTO_ATRACT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_PUNTO_ATRACT_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PUNTO_ATRACT_2.addFeatures(features_PUNTO_ATRACT_2);
var lyr_PUNTO_ATRACT_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PUNTO_ATRACT_2, 
                style: style_PUNTO_ATRACT_2,
                popuplayertitle: 'PUNTO_ATRACT',
                interactive: true,
    title: 'PUNTO_ATRACT<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_0.png" /> <br />\
    <img src="styles/legend/PUNTO_ATRACT_2_1.png" /> Barrio Chino<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_2.png" /> Boca Sur<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_3.png" /> Campanil UDEC<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_4.png" /> Coliseo Monumental La Tortuga<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_5.png" /> Mina Chiflón del Diablo<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_6.png" /> Monitor Huáscar<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_7.png" /> Observatorio Elke<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_8.png" /> Parque Mirador Los Pinos<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_9.png" /> Parque Ribera Biobío<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_10.png" /> Parque Tumbes<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_11.png" /> Playa Bellavista<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_12.png" /> Playa Lomas Coloradas<br />\
    <img src="styles/legend/PUNTO_ATRACT_2_13.png" /> Parque Mirador Laguna Grande<br />' });

lyr_ESRITopo_0.setVisible(true);lyr_POLIG_ATRACT_1.setVisible(true);lyr_PUNTO_ATRACT_2.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_POLIG_ATRACT_1,lyr_PUNTO_ATRACT_2];
lyr_POLIG_ATRACT_1.set('fieldAliases', {'id': 'id', 'ATRACTIVO': 'ATRACTIVO', 'BARRIO': 'BARRIO', 'X': 'X', 'Y': 'Y', 'ORIGEN': 'ORIGEN', });
lyr_PUNTO_ATRACT_2.set('fieldAliases', {'id': 'id', 'ATRACTIVO': 'ATRACTIVO', 'BARRIO': 'BARRIO', 'X': 'X', 'Y': 'Y', 'ORIGEN': 'ORIGEN', 'VIDEO': 'VIDEO', });
lyr_POLIG_ATRACT_1.set('fieldImages', {'id': 'TextEdit', 'ATRACTIVO': 'TextEdit', 'BARRIO': 'TextEdit', 'X': '', 'Y': '', 'ORIGEN': '', });
lyr_PUNTO_ATRACT_2.set('fieldImages', {'id': 'TextEdit', 'ATRACTIVO': 'TextEdit', 'BARRIO': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'ORIGEN': 'TextEdit', 'VIDEO': 'TextEdit', });
lyr_POLIG_ATRACT_1.set('fieldLabels', {'id': 'no label', 'ATRACTIVO': 'inline label - always visible', 'BARRIO': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'ORIGEN': 'inline label - always visible', });
lyr_PUNTO_ATRACT_2.set('fieldLabels', {'id': 'no label', 'ATRACTIVO': 'inline label - always visible', 'BARRIO': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'ORIGEN': 'inline label - always visible', 'VIDEO': 'no label', });
lyr_PUNTO_ATRACT_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});