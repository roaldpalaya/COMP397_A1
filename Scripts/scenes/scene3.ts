module scenes {
    export class Scene3 extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg:createjs.Bitmap;
        private _scene6Button : objects.Button;
        private _scene7Button : objects.Button;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Game scene started");

           //BG
            this._bg=new createjs.Bitmap(assets.getResult("Screen3"));
            this.addChild(this._bg);
            //Create button for scene 2
            this._scene6Button=new objects.Button("Choice1",config.Screen.CENTER_X-200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene6Button);
            this._scene6Button.on("click",this._onScene6ButtonClick, this);
            // Create button for scene and add to Game Scene container. Register for onclick event
            this._scene7Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene7Button);
            this._scene7Button.on("click", this._onScene7ButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onScene6ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE6;
            changeScene();
        }

        private _onScene7ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE7;
            changeScene();
        }
    }
}