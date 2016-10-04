/*
    Scene module to group all user-defined scenes  under the same "namespace aka module"
    Menu scene that contains all assets and functionality associated with the menu itself
*/

module scenes {
    export class Menu extends objects.Scene {

        // Private instance variables
        // Label or bitmap
        // Button 
        private _gameLabel : objects.Label;
        private _menuButton : objects.Button;
        private _menuButtonGameOver: objects.Button;
        private _bg:createjs.Bitmap;

        // Menu Class Contructor
        constructor()
        {
            super();
        }

        public start() : void {
            console.log("Menu Scene Started");
            //BG
            this._bg=new createjs.Bitmap(assets.getResult("Menu"));
            this.addChild(this._bg);

            //Menu text
            // Create Label for scene and add to Game Scene container
            this._gameLabel = new objects.Label("Treasure Adventure", "60px Consolar", "#000000", config.Screen.CENTER_X, config.Screen.CENTER_Y);
            this.addChild(this._gameLabel);
            // Add button to scene. Register for click callback function
            this._menuButton = new objects.Button("Start", config.Screen.CENTER_X, config.Screen.CENTER_Y + 180);
            this.addChild(this._menuButton);
            this._menuButton.on("click", this._startButtonClick, this);

            
            // Add menu scene to global stage container
            stage.addChild(this);
        }

        public update() : void {

        }

        // Fucntion for when button is pressed
        private _startButtonClick(event : createjs.MouseEvent) {
            // Change global scene variable to GAME. Call global changeScene() function
            scene = config.Scene.GAME;
            changeScene();
        }

        

    }
}