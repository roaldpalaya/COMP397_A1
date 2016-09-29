var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Scene15 = (function (_super) {
        __extends(Scene15, _super);
        function Scene15() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Scene15.prototype.start = function () {
            // Add objects to the scene
            console.log("Scene 15 started");
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("SCENE 15", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            //Create button for main scene
            this._resetButton = new objects.Button("Back", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._resetButton);
            this._resetButton.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Scene15.prototype.update = function () {
            // Update objects
        };
        Scene15.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Scene15;
    }(objects.Scene));
    scenes.Scene15 = Scene15;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene15.js.map