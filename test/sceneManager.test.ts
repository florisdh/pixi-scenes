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

    it('should not contain scene before adding', () => {
        expect(manager.contains('test')).toBe(false);
    });

    it('contains scene after adding', () => {
        manager.add('test', scene);
        expect(manager.contains('test')).toBe(true);
    });

    it('allows starting scenes', () => {
        manager.start('test');
        expect(manager.active).toBe(scene);
    });

    it('does not overwrite scenes', () => {
        manager.add('test', new Scene());
        expect(manager.active).toBe(scene);
    });

    it('allows stopping scenes', () => {
        manager.stop();
        expect(manager.active).toBeNull();
    });

    it('allows removing scenes', () => {
        manager.remove('test');
        expect(manager.active).toBeNull();
        expect(scene.app).toBeNull();
        expect(scene.scenes).toBeNull();
    });

    it('removing active scene should clear active', () => {
        manager.add('test', scene);
        manager.start('test');
        manager.remove('test');
        expect(manager.active).toBeNull();
    });
});
