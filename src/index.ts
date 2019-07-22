import _Scene from "./scene";
import _SceneManager from "./sceneManager";
import _IScene from "./iScene";

declare global {
    namespace PIXI {
        export type Scene = _Scene;
        export const Scene: typeof _Scene;
        export type SceneManager = _SceneManager;
        export const SceneManager: typeof _SceneManager;
    }
}

// Make it available under the PIXI namespace
(<any>PIXI).Scene = _Scene;
(<any>PIXI).SceneManager = _SceneManager;

// Also support normal imports
export {
    _Scene as Scene,
    _SceneManager as SceneManager,
    _IScene as IScene
};
