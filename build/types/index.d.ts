import _Scene from "./scene";
import _SceneManager from "./sceneManager";
import _IScene from "./iScene";
declare global {
    namespace PIXI.scenes {
        type Scene = _Scene;
        const Scene: typeof _Scene;
        type SceneManager = _SceneManager;
        const SceneManager: typeof _SceneManager;
    }
}
export { _Scene as Scene, _SceneManager as SceneManager, _IScene as IScene };
