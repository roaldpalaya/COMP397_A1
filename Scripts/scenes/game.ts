/*
    Scene  module to group all user-defined scenes  under the same "namespace aka module"
    Game scene that contains all assets and functionality associated with the game itself
*/

module scenes {
    export class Game extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : objects.Label;
        private _scene3Button : objects.Button;
        private _scene2Button : objects.Button;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("PLAY SCENE", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            //Create button for scene 2
            this._scene2Button=new objects.Button("Choice1",config.Screen.CENTER_X-180, config.Screen.CENTER_Y + 180);
            this.addChild(this._scene2Button);
            this._scene2Button.on("click",this._onScene2ButtonClick,this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._scene3Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._scene3Button);
            this._scene3Button.on("click", this._onScene3ButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onScene3ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE3;
            changeScene();
        }

        private _onScene2ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE2;
            changeScene();
        }
    }
}