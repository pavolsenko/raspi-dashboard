import {getDayOfTheWeek, normalizeTime} from '../timeHelpers';

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

    it('should format time properly if timestamp is provided', () => {
       expect(normalizeTime(1238384144)).toBe('05:35');
    });

    it('should format time property if Date object is provided', () => {
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
