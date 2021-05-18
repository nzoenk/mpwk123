var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MenaraTelekomunikasiBersama_1 = new ol.format.GeoJSON();
var features_MenaraTelekomunikasiBersama_1 = format_MenaraTelekomunikasiBersama_1.readFeatures(json_MenaraTelekomunikasiBersama_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MenaraTelekomunikasiBersama_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MenaraTelekomunikasiBersama_1.addFeatures(features_MenaraTelekomunikasiBersama_1);
var lyr_MenaraTelekomunikasiBersama_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MenaraTelekomunikasiBersama_1, 
                style: style_MenaraTelekomunikasiBersama_1,
                interactive: true,
                title: '<img src="styles/legend/MenaraTelekomunikasiBersama_1.png" /> Menara Telekomunikasi Bersama'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_MenaraTelekomunikasiBersama_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MenaraTelekomunikasiBersama_1];
lyr_MenaraTelekomunikasiBersama_1.set('fieldAliases', {'Id': 'Id', 'Ket': 'Ket', });
lyr_MenaraTelekomunikasiBersama_1.set('fieldImages', {'Id': '', 'Ket': '', });
lyr_MenaraTelekomunikasiBersama_1.set('fieldLabels', {'Id': 'no label', 'Ket': 'no label', });
lyr_MenaraTelekomunikasiBersama_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});