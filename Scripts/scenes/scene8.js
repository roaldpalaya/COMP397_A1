var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Scene8 = (function (_super) {
        __extends(Scene8, _super);
        function Scene8() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Scene8.prototype.start = function () {
            // Add objects to the scene
            console.log("Scene 8 started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("SCENE 8", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            //Create button for main scene
            this._resetButton = new objects.Button("Back", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._resetButton);
            this._resetButton.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Scene8.prototype.update = function () {
            // Update objects
        };
        Scene8.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Scene8;
    }(objects.Scene));
    scenes.Scene8 = Scene8;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene8.js.map