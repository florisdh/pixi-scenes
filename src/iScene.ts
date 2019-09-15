import * as PIXI from 'pixi.js';
import SceneManager from "./sceneManager";

export default interface IScene extends PIXI.Container {
    app: PIXI.Application|null;
    scenes: SceneManager|null;
    init(): void;
    awake(): void;
    sleep(): void;
    update(delta: number): void;
}
