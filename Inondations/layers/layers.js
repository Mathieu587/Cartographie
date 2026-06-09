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
    <img src="styles/legend/VueinterventionsInondationsBrunehaut_1_5.png" /> 2026<br />' });
var format_Vueinterventionsinondations_30052026debordement_extraction_donnees_2 = new ol.format.GeoJSON();
var features_Vueinterventionsinondations_30052026debordement_extraction_donnees_2 = format_Vueinterventionsinondations_30052026debordement_extraction_donnees_2.readFeatures(json_Vueinterventionsinondations_30052026debordement_extraction_donnees_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vueinterventionsinondations_30052026debordement_extraction_donnees_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vueinterventionsinondations_30052026debordement_extraction_donnees_2.addFeatures(features_Vueinterventionsinondations_30052026debordement_extraction_donnees_2);
cluster_Vueinterventionsinondations_30052026debordement_extraction_donnees_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Vueinterventionsinondations_30052026debordement_extraction_donnees_2
});
var lyr_Vueinterventionsinondations_30052026debordement_extraction_donnees_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Vueinterventionsinondations_30052026debordement_extraction_donnees_2, 
                style: style_Vueinterventionsinondations_30052026debordement_extraction_donnees_2,
                popuplayertitle: 'Vue interventions — inondations_30052026debordement_extraction_donnees',
                interactive: true,
                title: 'Vue interventions — inondations_30052026debordement_extraction_donnees'
            });
var group_Data = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Data'});

lyr_OpenStreetMap_0.setVisible(true);lyr_VueinterventionsInondationsBrunehaut_1.setVisible(true);lyr_Vueinterventionsinondations_30052026debordement_extraction_donnees_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_VueinterventionsInondationsBrunehaut_1,lyr_Vueinterventionsinondations_30052026debordement_extraction_donnees_2];
lyr_VueinterventionsInondationsBrunehaut_1.set('fieldAliases', {'fid': 'fid', 'TypeIntervention': 'TypeIntervention', 'Streetname': 'Streetname', 'Number': 'Number', 'Zip': 'Zip', 'City': 'City', 'Annee': 'Annee', 'Mois': 'Mois', 'Jour': 'Jour', });
lyr_Vueinterventionsinondations_30052026debordement_extraction_donnees_2.set('fieldAliases', {'fid': 'fid', 'Type d\'intervention': 'Type d\'intervention', 'Numéro Verdi': 'Numéro Verdi', 'Etat d\'intervention': 'Etat d\'intervention', 'Rue': 'Rue', 'Numéro': 'Numéro', 'Code Postal': 'Code Postal', 'Commune': 'Commune', 'Date d\'intervention': 'Date d\'intervention', 'Heure': 'Heure', 'Jour': 'Jour', 'Mois': 'Mois', 'Annee': 'Annee', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_VueinterventionsInondationsBrunehaut_1.set('fieldImages', {'fid': 'TextEdit', 'TypeIntervention': 'TextEdit', 'Streetname': 'TextEdit', 'Number': 'TextEdit', 'Zip': 'TextEdit', 'City': 'TextEdit', 'Annee': 'Range', 'Mois': 'Range', 'Jour': 'Range', });
lyr_Vueinterventionsinondations_30052026debordement_extraction_donnees_2.set('fieldImages', {'fid': 'TextEdit', 'Type d\'intervention': 'TextEdit', 'Numéro Verdi': 'TextEdit', 'Etat d\'intervention': 'TextEdit', 'Rue': 'TextEdit', 'Numéro': 'TextEdit', 'Code Postal': 'TextEdit', 'Commune': 'TextEdit', 'Date d\'intervention': 'TextEdit', 'Heure': 'TextEdit', 'Jour': 'Range', 'Mois': 'Range', 'Annee': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_VueinterventionsInondationsBrunehaut_1.set('fieldLabels', {'fid': 'hidden field', 'TypeIntervention': 'header label - always visible', 'Streetname': 'inline label - always visible', 'Number': 'inline label - visible with data', 'Zip': 'hidden field', 'City': 'header label - always visible', 'Annee': 'header label - visible with data', 'Mois': 'inline label - always visible', 'Jour': 'inline label - always visible', });
lyr_Vueinterventionsinondations_30052026debordement_extraction_donnees_2.set('fieldLabels', {'fid': 'hidden field', 'Type d\'intervention': 'inline label - always visible', 'Numéro Verdi': 'hidden field', 'Etat d\'intervention': 'inline label - always visible', 'Rue': 'inline label - always visible', 'Numéro': 'inline label - always visible', 'Code Postal': 'inline label - always visible', 'Commune': 'inline label - always visible', 'Date d\'intervention': 'inline label - always visible', 'Heure': 'hidden field', 'Jour': 'hidden field', 'Mois': 'hidden field', 'Annee': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', });
lyr_Vueinterventionsinondations_30052026debordement_extraction_donnees_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});