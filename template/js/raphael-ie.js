var rsr = Raphael("rsr", 747, 1052);
var set = rsr.set();


var path18123 = rsr.path("m 293.22368,714.71507 151.34125,0 0,126.11773 208.09422,0 0,-280.61193 59.90591,0 0,-113.50594 -59.90591,0 0,-220.70599 -463.48259,0 0,9.45883 454.02376,0 0,220.70599 59.90591,0 0,94.58828 -59.90591,0 0,280.61186 -189.17656,0 0,-126.11766 -160.80008,0 0,9.45883 z").attr({id: 'path18123',parent: 'layer1',fill: 'none',stroke: '#000000',"stroke-width": '2',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("t-3.7890624e-6,-187.23976").data('id', 'path18123');
var path18125 = rsr.path("m 198.63539,598.05619 0,-186.02363 -157.647134,0 0,-176.56479 37.835313,0 0,-9.45883 -47.294142,0 0,195.48245 157.647133,0 0,176.5648 9.45883,0 z").attr({id: 'path18125',parent: 'layer1',fill: 'none',stroke: '#000000',"stroke-width": '2',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("t-3.7890624e-6,-187.23976").data('id', 'path18125');
var path18129 = rsr.path("m 189.17656,598.05619 0,116.65888 104.04712,0").attr({id: 'path18129',parent: 'layer1',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("t-3.7890624e-6,-187.23976").data('id', 'path18129');
var path18131 = rsr.path("m 293.22368,705.25624 -94.58829,0 0,-107.20005").attr({id: 'path18131',parent: 'layer1',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none','stroke-opacity': '1'}).transform("t-3.7890624e-6,-187.23976").data('id', 'path18131');
var path18135 = rsr.path("m 0,194.47951 0,677.88269 684.18858,0 0,-280.6119 59.90591,0 0,-176.56479 -59.90591,0 0,-220.706 -684.18858,0 z").attr({id: 'path18135',parent: 'layer1',fill: 'none',stroke: '#000000',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": '--',"stroke-dashoffset": '0','stroke-opacity': '1'}).transform("t-3.7890624e-6,-187.23976").data('id', 'path18135');
var rect18745 = rsr.rect(7.731246, 717.98578, 167.1882, 30.924984).attr({id: 'rect18745',x: '7.731246',y: '717.98578',parent: 'layer1',"stroke-width": '1',"stroke-miterlimit": '4',"stroke-dasharray": 'none',"stroke-dashoffset": '0',fill: '#ffffff',stroke: '#ff0000',"stroke-opacity": '1',"fill-opacity": '1'}).transform("t-3.7890624e-6,-187.23976 t3.7890624e-6,187.23976").data('id', 'rect18745');
var text18697 = rsr.text(15.789299, 927.47614, 'janela alta').attr({id: 'text18697',parent: 'layer1',"font-size": '16px',"font-style": 'normal',"font-variant": 'normal',"font-weight": 'normal',"font-stretch": 'normal',"text-align": 'start',"line-height": '125%',"letter-spacing": '0px',"word-spacing": '0px',"writing-mode": 'lr-tb',"text-anchor": 'start',fill: '#000000',"fill-opacity": '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"font-family": 'Sans',"-inkscape-font-specification": 'Sans'}).transform("t-3.7890624e-6,-187.23976").data('id', 'text18697');
var text18701 = rsr.text(14.148674, 957.78827, 'folha de janela alta').attr({id: 'text18701',parent: 'layer1',"font-size": '16px',"font-style": 'normal',"font-variant": 'normal',"font-weight": 'normal',"font-stretch": 'normal',"text-align": 'start',"line-height": '125%',"letter-spacing": '0px',"word-spacing": '0px',"writing-mode": 'lr-tb',"text-anchor": 'start',fill: '#000000',"fill-opacity": '1',stroke: 'none','stroke-width':'1','stroke-opacity':'1',"font-family": 'Sans',"-inkscape-font-specification": 'Sans'}).transform("t-3.7890624e-6,-187.23976").data('id', 'text18701');
path18135.node.id = 'coberta';
rect18745.node.id = 'cobertaTxt';

var hoverIn = function() {
    this.attr({"stroke": "#ff0000"});
};

var hoverOut = function() {
    this.attr({"stroke": "#000"});
}

path18135.hover(hoverIn, hoverOut, path18135, path18135);
rect18745.hover(hoverIn, hoverOut, path18135, path18135);
text18697.hover(hoverIn, hoverOut, path18135, path18135);