import * as PIXI from 'pixi.js';
import SceneManager from '../src/sceneManager';
import Scene from '../src/scene';

describe('SceneManager', () => {

    // TODO: write mock for PIXI
    const app: PIXI.Application = <PIXI.Application>{
        ticker: {
            add: (x) => {}
        },
        stage: {
            addChild: (x) => {},
            removeChild: (x) => {}
        }
    };

    const manager: SceneManager = new SceneManager(app);
    
    it('is a valid class', () => {
        expect(manager).toBeInstanceOf(SceneManager);
    });

    it('contains the right properties', () => {
        expect(manager).toHaveProperty('app');
        expect(manager['app']).toBe(app);
    });
    
    const scene: Scene = new Scene(),
        sceneName: string = 'test';

    it('should not contain scene before adding', () => {
        expect(manager.contains(sceneName)).toBe(false);
    });

    it('contains scene after adding', () => {
        manager.add(sceneName, scene);
        expect(manager.contains(sceneName)).toBe(true);
    });

    it('allows starting scenes', () => {
        manager.start(sceneName);
        expect(manager.active).toBe(scene);
        expect(manager.activeName).toBe(sceneName);
    });

    it('does not overwrite scenes', () => {
        manager.add(sceneName, new Scene());
        expect(manager.active).toBe(scene);
    });

    it('allows stopping scenes', () => {
        manager.stop();
        expect(manager.active).toBeNull();
    });

    it('list of scenes is correct', () => {
        expect(manager.sceneNames).toEqual([sceneName]);
    });

    it('allows removing scenes', () => {
        manager.remove(sceneName);
        expect(manager.active).toBeNull();
        expect(scene.app).toBeNull();
        expect(scene.scenes).toBeNull();
    });

    it('removing active scene should clear active', () => {
        manager.add(sceneName, scene);
        manager.start(sceneName);
        manager.remove(sceneName);
        expect(manager.active).toBeNull();
    });
});
