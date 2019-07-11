module PixiScenes {
    export interface IState extends PIXI.Container {
        app: PIXI.Application|null;
        states: StateManager|null;
        init(): void;
        start(): void;
        stop(): void;
        update(delta: number): void;
    }
}
