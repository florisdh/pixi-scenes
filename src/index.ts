import _Scene from "./scene";
import _SceneManager from "./sceneManager";
import _IScene from "./iScene";

declare global {
    namespace PIXI.scenes {
        export type Scene = _Scene;
        export const Scene: typeof _Scene;
        export type SceneManager = _SceneManager;
        export const SceneManager: typeof _SceneManager;
    }
}

export {
    _Scene as Scene,
    _SceneManager as SceneManager,
    _IScene as IScene
};
