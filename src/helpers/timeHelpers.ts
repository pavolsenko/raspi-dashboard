export function normalizeTime(value?: number | Date): string {
    if (!value) {
        return '00:00';
    }

    let date: Date;
    if (Number.isInteger(value)) {
        date = new Date(((value || 0) as number) * 1000);
    } else {
        date = value as Date;
    }
    let result: string;

    if (date.getHours() < 10) {
        result = '0' + date.getHours().toString();
    } else {
        result = date.getHours().toString();
    }

    if (date.getMinutes() < 10) {
        result += ':0' + date.getMinutes().toString();
    } else {
        result += ':' + date.getMinutes().toString();
    }

    return result;
}

export function isDay(
    sunriseMs?: number,
    sunsetMs?: number,
    dateTimeMs: number = Date.now(),
): boolean {
    if (!sunriseMs || !sunsetMs) {
        return true;
    }

    const sunriseHours = new Date(sunriseMs * 1000).getHours();
    const sunsetHours = new Date(sunsetMs * 1000).getHours();
    const timeHours = new Date(dateTimeMs).getHours();

    return timeHours > sunriseHours && timeHours < sunsetHours;
}

export function getDayName(index: number): string {
    return new Date(new Date().setDate(new Date().getDate() + index))
        .toLocaleDateString('default', { weekday: 'long' })
        .substring(0, 3);
}

export function formatDateWithOffset(date: Date): string {
    function pad(n: number) {
        return String(n).padStart(2, '0');
    }

    const year: number = date.getFullYear();
    const month: string = pad(date.getMonth() + 1);
    const day: string = pad(date.getDate());
    const hours: string = pad(date.getHours());
    const minutes: string = pad(date.getMinutes());
    const seconds: string = pad(date.getSeconds());
    const millis: string = String(date.getMilliseconds()).padStart(3, '0');

    const offsetMinutes: number = date.getTimezoneOffset(); // in minutes
    const absOffset: number = Math.abs(offsetMinutes);
    const offsetHours: string = pad(Math.floor(absOffset / 60));
    const offsetMins: string = pad(absOffset % 60);
    const offsetSign = offsetMinutes > 0 ? '-' : '+';

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${millis}${offsetSign}${offsetHours}${offsetMins}`;
}
