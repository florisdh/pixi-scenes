import Scene from '../src/scene';

describe('Scene', () => {
    const scene = new Scene();

    it('is a valid class', () => {
        expect(scene).toBeInstanceOf(Scene);
    });

    it('contains the right properties', () => {
        expect(scene).toHaveProperty('app');
        expect(scene).toHaveProperty('scenes');
    });
});
