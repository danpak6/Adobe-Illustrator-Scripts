
//Adobe Illustrator 
//ExtendScripts for Adobe Illustrator, distributed under the MIT License.
//Export multiple artboards only to .ai
// JS code (c) copyright: Daniel Pak danpak@gmail.com @danpak6
//https://github.com/danpak6/Adobe-Illustrator-Scripts.git

var num_exported = 0;
var starting_artboard = 0;
var docRef = app.activeDocument;
var num_artboards = docRef.artboards.length;

destFolder = Folder.selectDialog('Select the folder where you want to save the converted AI files.', '~');

for (var i = starting_artboard; i < num_artboards; i++) {

    docRef.artboards.setActiveArtboardIndex(i);
    docArt = docRef.artboards[i];

    var artboardName = docRef.artboards[i].name;
    var artboardRef = docRef.artboards[i];
    var destFile = new File(destFolder + "/" + artboardName);

    var aiSaveOptions = new IllustratorSaveOptions();
    aiSaveOptions.artboardRange = (i + 1).toString();
    docRef.saveAs(destFile, aiSaveOptions);

}


