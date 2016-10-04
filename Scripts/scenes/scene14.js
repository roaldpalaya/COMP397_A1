var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Scene14 = (function (_super) {
        __extends(Scene14, _super);
        function Scene14() {
            _super.call(this);
        }
        // PUBLIC FUNCTIONS
        Scene14.prototype.start = function () {
            // Add objects to the scene
            console.log("Scene 14 started");
            //BG
            this._bg = new createjs.Bitmap(assets.getResult("Screen14"));
            this.addChild(this._bg);
            //Create button for main scene
            this._resetButton = new objects.Button("Back", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._resetButton);
            this._resetButton.on("click", this._onBackButtonClick, this);
            // Add gamescene to main stage container. 
            stage.addChild(this);
        };
        Scene14.prototype.update = function () {
            // Update objects
        };
        Scene14.prototype._onBackButtonClick = function (event) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.MENU;
            changeScene();
        };
        return Scene14;
    }(objects.Scene));
    scenes.Scene14 = Scene14;
})(scenes || (scenes = {}));
//# sourceMappingURL=scene14.js.map