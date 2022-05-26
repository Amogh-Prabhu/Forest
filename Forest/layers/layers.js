var wms_layers = [];

var format_Admin2_0 = new ol.format.GeoJSON();
var features_Admin2_0 = format_Admin2_0.readFeatures(json_Admin2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Admin2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin2_0.addFeatures(features_Admin2_0);
var lyr_Admin2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Admin2_0, 
                style: style_Admin2_0,
                interactive: true,
    title: 'Admin2<br />\
    <img src="styles/legend/Admin2_0_0.png" /> 0 - 0.11<br />\
    <img src="styles/legend/Admin2_0_1.png" /> 0.11 - 0.21<br />\
    <img src="styles/legend/Admin2_0_2.png" /> 0.21 - 0.36<br />\
    <img src="styles/legend/Admin2_0_3.png" /> 0.36 - 0.6<br />\
    <img src="styles/legend/Admin2_0_4.png" /> 0.6 - 0.9<br />'
        });

lyr_Admin2_0.setVisible(true);
var layersList = [lyr_Admin2_0];
lyr_Admin2_0.set('fieldAliases', {'ST_NM': 'ST_NM', 'JOIN ID': 'JOIN ID', 'Term_State / UT': 'Term_State / UT', 'Term_% of forested area': 'Term_% of forested area', });
lyr_Admin2_0.set('fieldImages', {'ST_NM': 'TextEdit', 'JOIN ID': 'TextEdit', 'Term_State / UT': 'TextEdit', 'Term_% of forested area': 'TextEdit', });
lyr_Admin2_0.set('fieldLabels', {'ST_NM': 'header label', 'JOIN ID': 'no label', 'Term_State / UT': 'no label', 'Term_% of forested area': 'inline label', });
lyr_Admin2_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});