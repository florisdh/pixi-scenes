import {SceneManager} from "./sceneManager";

export interface IScene extends PIXI.Container {
    app: PIXI.Application|null;
    scenes: SceneManager|null;
    init(): void;
    start(): void;
    stop(): void;
    update(delta: number): void;
}
