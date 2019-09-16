import * as PIXI from 'pixi.js';
import SceneManager from "./sceneManager";
import IScene from "./iScene";

/**
 * Base scene class which should be extended and used to your own likings.
 */
export default class Scene extends PIXI.Container implements IScene {

    /**
     * Reference to the pixi application this scene has been added to.
     * This will automatically be set by the SceneManager after it has been added.
     */
    public app: PIXI.Application|null;

    /**
     * Reference to the SceneManager this Scene has been added to.
     * This will automatically be set by the SceneManager after it has been added.
     */
    public scenes: SceneManager|null;

    /**
     * If the scene has been started before from it's current SceneManager.
     * The SceneManager will use this to check if the init should be run.
     */
    public hasRun: boolean;

    constructor() {
        super();
        this.app = null;
        this.scenes = null;
        this.hasRun = false;
    }

    /**
     * Called before starting the scene for the first time in this SceneManager.
     * You should create all of your elements for this scene here.
     */
    public init(): void {}

    /**
     * Called after removing this scene from the SceneManager and it has ran before.
     * You should destroy all of your elements from this scene here.
     */
    public destroy(): void {}

    /**
     * Called after this Scene is started from the SceneManager.
     * This means that this Scene is now the active scene in the SceneManager and will be rendered.
     */
    public start(): void {}

    /**
     * Called after this Scene is stopped from the SceneManager.
     * The Scene is not the active scene anymore, nor will it be rendered.
     */
    public stop(): void {}

    /**
     * Called with every PIXI update tick while this Scene is the active scene in the SceneManager.
     * @param {number} delta Elapsed time since the last update in milliseconds.
     */
    public update(delta: number): void {}
}
