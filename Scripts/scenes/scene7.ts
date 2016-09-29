module scenes {
    export class Scene7 extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : objects.Label;
        private _scene14Button : objects.Button;
        private _scene15Button : objects.Button;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Scene 7 started");

            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("SCENE 7", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            //Create button for scene 4
            this._scene14Button=new objects.Button("Choice1",config.Screen.CENTER_X-200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene14Button);
            this._scene14Button.on("click",this._onScene14ButtonClick, this);
            // Create button for scene 5 and add to Game Scene container. Register for onclick event
            this._scene15Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene15Button);
            this._scene15Button.on("click", this._onScene15ButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onScene14ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE14;
            changeScene();
        }

        private _onScene15ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE15;
            changeScene();
        }
    }
}