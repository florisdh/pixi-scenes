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
    
    const scene: Scene = new Scene();

    it('contains scene after adding', () => {
        manager.add('test', scene);
        expect(manager.contains('test')).toBe(true);
    });

    it('keep track of active scene', () => {
        manager.start('test');
        expect(manager.active).toBe(scene);
    });

    it('does not overwrite scenes', () => {
        manager.add('test', new Scene());
        expect(manager.active).toBe(scene);
    });
});
