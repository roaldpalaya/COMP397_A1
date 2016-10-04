module scenes {
    export class Scene6 extends objects.Scene {

        // PRIVATE VARIABLES
        private _bg:createjs.Bitmap;
        private _scene12Button : objects.Button;
        private _scene13Button : objects.Button;

        constructor() {
            super();
        }

        // PUBLIC FUNCTIONS
        public start() : void {
            // Add objects to the scene
            console.log("Scene 6 started");

            //BG
            this._bg=new createjs.Bitmap(assets.getResult("Screen6"));
            this.addChild(this._bg);
            //Create button for scene 4
            this._scene12Button=new objects.Button("Choice1",config.Screen.CENTER_X-200, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene12Button);
            this._scene12Button.on("click",this._onScene12ButtonClick, this);
            // Create button for scene 5 and add to Game Scene container. Register for onclick event
            this._scene13Button = new objects.Button("Choice2", config.Screen.CENTER_X, config.Screen.CENTER_Y + 145);
            this.addChild(this._scene13Button);
            this._scene13Button.on("click", this._onScene13ButtonClick, this);

            // Add gamescene to main stage container. 
            stage.addChild(this);
        }

        public update() : void {
            // Update objects
        }

        private _onScene12ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE12;
            changeScene();
        }

        private _onScene13ButtonClick(event : createjs.MouseEvent) {
            // Set global variable to Menu Scene and call changescene function
            scene = config.Scene.SCENE13;
            changeScene();
        }
    }
}