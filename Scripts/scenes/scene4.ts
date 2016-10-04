module scenes {
    export class Scene4 extends objects.Scene {

        // PRIVATE VARIABLES
        private _gameLabel : objects.Label;
        private _scene8Button : objects.Button;
        private _scene9Button : objects.Button;
        private _bg:createjs.Bitmap;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Scene 4 started");
            //BG
            this._bg=new createjs.Bitmap(assets.getResult("Screen4"));
            this.addChild(this._bg);
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("SCENE 4", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            //Create button for scene 8
            this._scene8Button=new objects.Button("Choice1",config.Screen.CENTER_X-200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene8Button);
            this._scene8Button.on("click",this._onScene8ButtonClick, this);
            // Create button for scene 9 and add to Game Scene container. Register for onclick event
            this._scene9Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene9Button);
            this._scene9Button.on("click", this._onScene9ButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onScene8ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE8;
            changeScene();
        }

        private _onScene9ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE9;
            changeScene();
        }
    }
}