export const normalizeTime = (value?: number | Date): string => {
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
};

export const isDay = (
    sunriseMs?: number,
    sunsetMs?: number,
    dateTimeMs: number = Date.now(),
): boolean => {
    if (!sunriseMs || !sunsetMs) {
        return true;
    }

    const sunriseHours = new Date(sunriseMs * 1000).getHours();
    const sunsetHours = new Date(sunsetMs * 1000).getHours();
    const timeHours = new Date(dateTimeMs).getHours();

    return timeHours > sunriseHours && timeHours < sunsetHours;
};

export function getDayName(index: number): string {
    return new Date(new Date().setDate(new Date().getDate() + index))
        .toLocaleDateString('default', { weekday: 'long' })
        .substring(0, 3);
}
