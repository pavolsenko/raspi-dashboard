import { isDay, normalizeTime } from '@app/helpers/timeHelpers';

describe('timeHelper', () => {
    describe('normalizeTime', () => {
        it('should return midnight if no value is provided', () => {
            expect(normalizeTime()).toBe('00:00');
        });

        it('should add zeros to minutes and hours', () => {
            const date = new Date();
            date.setHours(8);
            date.setMinutes(5);
            expect(normalizeTime(date)).toBe('08:05');
        });

        it('should format time properly', () => {
            const date = new Date();
            date.setHours(18);
            date.setMinutes(25);
            expect(normalizeTime(date)).toBe('18:25');
        });
    });

    describe('isDay', () => {
        it('should decide if current time is daytime or nighttime', () => {
            expect(isDay(1656125700, 1656183543, 1656185296862)).toBeFalsy();
            expect(isDay(1656125700, 1656183543, 1656152964827)).toBeTruthy();
            expect(isDay(undefined, 1656183543, 1656152964827)).toBeTruthy();
            expect(isDay(1656125700, undefined, 1656152964827)).toBeTruthy();
        });
    });
});
