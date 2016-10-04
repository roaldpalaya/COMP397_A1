/// <reference path = "_reference.ts" />
// Global Variables
var assets;
var canvas;
var stage;
var currentScene;
var scene;
// Game scenes
var menuScene;
var gameScene;
var scene2;
var scene3;
var scene4;
var scene5;
var scene6;
var scene7;
var scene8;
var scene9;
var scene10;
var scene11;
var scene12;
var scene13;
var scene14;
var scene15;
// Preload Assets required
var assetData = [
    { id: "Start", src: "../../Assets/images/Start.png" },
    { id: "Back", src: "../../Assets/images/Back.png" },
    { id: "BG", src: "../../Assets/images/images.jpg" },
    { id: "Choice1", src: "../../Assets/images/img1.png" },
    { id: "Choice2", src: "../../Assets/images/img2.png" },
    { id: "Menu", src: "../../Assets/images/map.jpg" },
    { id: "Main", src: "../../Assets/images/1.jpg" },
    { id: "Screen2", src: "../../Assets/images/2.jpg" },
    { id: "Screen3", src: "../../Assets/images/3.jpg" },
    { id: "Screen4", src: "../../Assets/images/4.jpg" },
    { id: "Screen5", src: "../../Assets/images/5.jpg" },
    { id: "Screen6", src: "../../Assets/images/6.jpg" },
    { id: "Screen7", src: "../../Assets/images/7.jpg" },
    { id: "Screen8", src: "../../Assets/images/8.jpg" },
    { id: "Screen9", src: "../../Assets/images/9.jpg" },
    { id: "Screen10", src: "../../Assets/images/10.jpg" },
    { id: "Screen11", src: "../../Assets/images/11.jpg" },
    { id: "Screen12", src: "../../Assets/images/12.jpg" },
    { id: "Screen13", src: "../../Assets/images/13.jpg" },
    { id: "Screen14", src: "../../Assets/images/14.jpg" },
    { id: "Screen15", src: "../../Assets/images/15.jpg" }
];
function preload() {
    // Create a queue for assets being loaded
    assets = new createjs.LoadQueue(false);
    // assets.installPlugin(createjs.Sound);
    // Register callback function to be run when assets complete loading.
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}
function init() {
    // Reference to canvas element
    canvas = document.getElementById("canvas");
    // Tie canvas element to createjs stage container
    stage = new createjs.Stage(canvas);
    // Enable mouse events that are polled 20 times per tick
    stage.enableMouseOver(20);
    // Set FPS for game and register for "tick" callback function
    createjs.Ticker.setFPS(config.Game.FPS);
    createjs.Ticker.on("tick", this.gameLoop, this);
    // Set initial scene to MENU scene and call changeScene().
    scene = config.Scene.MENU;
    changeScene();
}
function gameLoop(event) {
    // Update whatever scene is currently active.
    console.log("gameLoop update");
    currentScene.update();
    stage.update();
}
function changeScene() {
    // Simple state machine pattern to define scene swapping.
    switch (scene) {
        case config.Scene.MENU:
            stage.removeAllChildren();
            menuScene = new scenes.Menu();
            currentScene = menuScene;
            console.log("Starting MENU scene");
            break;
        case config.Scene.GAME:
            stage.removeAllChildren();
            currentScene = new scenes.Game();
            console.log("Starting GAME scene");
            break;
        case config.Scene.SCENE2:
            stage.removeAllChildren();
            currentScene = new scenes.Scene2();
            console.log("Starting Scene 2");
            break;
        case config.Scene.SCENE3:
            stage.removeAllChildren();
            currentScene = new scenes.Scene3();
            console.log("Starting Scene 3");
            break;
        case config.Scene.SCENE4:
            stage.removeAllChildren();
            currentScene = new scenes.Scene4();
            console.log("Starting Scene 4");
            break;
        case config.Scene.SCENE5:
            stage.removeAllChildren();
            currentScene = new scenes.Scene5();
            console.log("Starting Scene 5");
            break;
        case config.Scene.SCENE6:
            stage.removeAllChildren();
            currentScene = new scenes.Scene6();
            console.log("Starting Scene 6");
            break;
        case config.Scene.SCENE7:
            stage.removeAllChildren();
            currentScene = new scenes.Scene7();
            console.log("Starting Scene 7");
            break;
        case config.Scene.SCENE8:
            stage.removeAllChildren();
            currentScene = new scenes.Scene8();
            console.log("Starting Scene 8");
            break;
        case config.Scene.SCENE9:
            stage.removeAllChildren();
            currentScene = new scenes.Scene9();
            console.log("Starting Scene 9");
            break;
        case config.Scene.SCENE10:
            stage.removeAllChildren();
            currentScene = new scenes.Scene10();
            console.log("Starting Scene 10");
            break;
        case config.Scene.SCENE11:
            stage.removeAllChildren();
            currentScene = new scenes.Scene11();
            console.log("Starting Scene 11");
            break;
        case config.Scene.SCENE12:
            stage.removeAllChildren();
            currentScene = new scenes.Scene12();
            console.log("Starting Scene 12");
            break;
        case config.Scene.SCENE13:
            stage.removeAllChildren();
            currentScene = new scenes.Scene13();
            console.log("Starting Scene 13");
            break;
        case config.Scene.SCENE14:
            stage.removeAllChildren();
            currentScene = new scenes.Scene14();
            console.log("Starting Scene 14");
            break;
        case config.Scene.SCENE15:
            stage.removeAllChildren();
            currentScene = new scenes.Scene15();
            console.log("Starting Scene 15");
            break;
    }
}
//# sourceMappingURL=game.js.map