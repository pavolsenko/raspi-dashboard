import {getDayOfTheWeek, isDay, normalizeTime} from '../timeHelpers';

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

    // TODO: fix for timezones
    it.skip('should format time properly if timestamp is provided', () => {
       expect(normalizeTime(1238384144)).toBe('05:35');
    });

    // TODO: fix for timezones
    it.skip('should format time property if Date object is provided', () => {
        expect(normalizeTime(new Date(1238384332))).toBe('08:59');
    });
});

describe('getDayOfTheWeek', () => {
    it('should return correct day of the week', () => {
        expect(getDayOfTheWeek(0)).toBe('Sunday');
        expect(getDayOfTheWeek(1)).toBe('Monday');
        expect(getDayOfTheWeek(2)).toBe('Tuesday');
        expect(getDayOfTheWeek(3)).toBe('Wednesday');
        expect(getDayOfTheWeek(4)).toBe('Thursday');
        expect(getDayOfTheWeek(5)).toBe('Friday');
        expect(getDayOfTheWeek(6)).toBe('Saturday');
    });

    it('should return empty string on invalid day of the week', () => {
        expect(getDayOfTheWeek(24)).toBe('');

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
