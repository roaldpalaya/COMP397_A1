var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Scene13 = (function (_super) {
        __extends(Scene13, _super);
        function Scene13() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Scene13.prototype.start = function () {
            // Add objects to the scene
            console.log("Scene 13 started");
            //BG
            this._bg = new createjs.Bitmap(assets.getResult("Screen13"));
            this.addChild(this._bg);
            //Create button for main scene
            this._resetButton = new objects.Button("Back", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._resetButton);
            this._resetButton.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Scene13.prototype.update = function () {
            // Update objects
        };
        Scene13.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Scene13;
    }(objects.Scene));
    scenes.Scene13 = Scene13;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene13.js.map