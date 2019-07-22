import SceneManager from "./sceneManager";
import IScene from "./iScene";

export default class Scene extends PIXI.Container implements IScene {

    public app: PIXI.Application|null;
    public scenes: SceneManager|null;

    constructor() {
        super();
        this.app = null;
        this.scenes = null;
    }

    public init(): void {}
    public start(): void {}
    public stop(): void {}
    public update(delta: number): void {}
}
