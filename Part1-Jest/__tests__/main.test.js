const formatVolumeIconPath = require('../assets/scripts/main');

describe('tests for formatVolumeIconPath', () => {
    test('if value > 66', () => {
        expect(formatVolumeIconPath(80)).toMatch('./assets/media/icons/volume-level-3.svg');
    });
    test('if 33 < val <= 66', () => {
        expect(formatVolumeIconPath(40)).toMatch('./assets/media/icons/volume-level-2.svg');
    });
    test('if 0 < val <= 33', () => {
        expect(formatVolumeIconPath(20)).toMatch('./assets/media/icons/volume-level-1.svg');
    });
    test('if value == 0', () => {
        expect(formatVolumeIconPath(0)).toMatch('./assets/media/icons/volume-level-0.svg');
    });
});