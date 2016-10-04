module scenes {
    export class Scene5 extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg:createjs.Bitmap;
        private _scene10Button : objects.Button;
        private _scene11Button : objects.Button;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Scene 5 started");

            //BG
            this._bg=new createjs.Bitmap(assets.getResult("Screen5"));
            this.addChild(this._bg);
            //Create button for scene 4
            this._scene10Button=new objects.Button("Choice1",config.Screen.CENTER_X-200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene10Button);
            this._scene10Button.on("click",this._onScene10ButtonClick, this);
            // Create button for scene 5 and add to Game Scene container. Register for onclick event
            this._scene11Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene11Button);
            this._scene11Button.on("click", this._onScene11ButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onScene10ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE10;
            changeScene();
        }

        private _onScene11ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE11;
            changeScene();
        }
    }
}