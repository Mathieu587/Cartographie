var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VueinterventionsInondationsBrunehaut_1 = new ol.format.GeoJSON();
var features_VueinterventionsInondationsBrunehaut_1 = format_VueinterventionsInondationsBrunehaut_1.readFeatures(json_VueinterventionsInondationsBrunehaut_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VueinterventionsInondationsBrunehaut_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VueinterventionsInondationsBrunehaut_1.addFeatures(features_VueinterventionsInondationsBrunehaut_1);
var lyr_VueinterventionsInondationsBrunehaut_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VueinterventionsInondationsBrunehaut_1, 
                style: style_VueinterventionsInondationsBrunehaut_1,
                popuplayertitle: 'Vue interventions — Inondations Brunehaut',
                interactive: true,
    title: 'Vue interventions — Inondations Brunehaut<br />\
    <img src="styles/legend/VueinterventionsInondationsBrunehaut_1_0.png" /> 2021<br />\
    <img src="styles/legend/VueinterventionsInondationsBrunehaut_1_1.png" /> 2022<br />\
    <img src="styles/legend/VueinterventionsInondationsBrunehaut_1_2.png" /> 2023<br />\
    <img src="styles/legend/VueinterventionsInondationsBrunehaut_1_3.png" /> 2024<br />\
    <img src="styles/legend/VueinterventionsInondationsBrunehaut_1_4.png" /> 2025<br />\
    <img src="styles/legend/VueinterventionsInondationsBrunehaut_1_5.png" /> 2026<br />\
    <img src="styles/legend/VueinterventionsInondationsBrunehaut_1_6.png" /> <br />' });
var group_Data = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Data'});

lyr_OpenStreetMap_0.setVisible(true);lyr_VueinterventionsInondationsBrunehaut_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_VueinterventionsInondationsBrunehaut_1];
lyr_VueinterventionsInondationsBrunehaut_1.set('fieldAliases', {'fid': 'fid', 'TypeIntervention': 'TypeIntervention', 'Streetname': 'Streetname', 'Number': 'Number', 'Zip': 'Zip', 'City': 'City', 'Annee': 'Annee', 'Mois': 'Mois', 'Jour': 'Jour', });
lyr_VueinterventionsInondationsBrunehaut_1.set('fieldImages', {'fid': 'TextEdit', 'TypeIntervention': 'TextEdit', 'Streetname': 'TextEdit', 'Number': 'TextEdit', 'Zip': 'TextEdit', 'City': 'TextEdit', 'Annee': 'Range', 'Mois': 'Range', 'Jour': 'Range', });
lyr_VueinterventionsInondationsBrunehaut_1.set('fieldLabels', {'fid': 'hidden field', 'TypeIntervention': 'header label - always visible', 'Streetname': 'inline label - always visible', 'Number': 'inline label - visible with data', 'Zip': 'hidden field', 'City': 'header label - always visible', 'Annee': 'header label - visible with data', 'Mois': 'inline label - always visible', 'Jour': 'inline label - always visible', });
lyr_VueinterventionsInondationsBrunehaut_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});