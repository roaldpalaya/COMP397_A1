module scenes {
    export class Scene2 extends objects.Scene {

        // PRIVATE VARIABLES
        
        private _scene4Button : objects.Button;
        private _scene5Button : objects.Button;
        private _bg:createjs.Bitmap;
        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Scene 2 started");

            //BG
            this._bg=new createjs.Bitmap(assets.getResult("Screen2"));
            this.addChild(this._bg);
            //Create button for scene 4
            this._scene4Button=new objects.Button("Choice1",config.Screen.CENTER_X-200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene4Button);
            this._scene4Button.on("click",this._onScene4ButtonClick, this);
            // Create button for scene 5 and add to Game Scene container. Register for onclick event
            this._scene5Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene5Button);
            this._scene5Button.on("click", this._onScene5ButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onScene4ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE4;
            changeScene();
        }

        private _onScene5ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE5;
            changeScene();
        }
    }
}