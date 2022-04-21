export const isDay = (sunriseMs?: number, sunsetMs?: number, dateTimeMs: number = Date.now()): boolean => {
    if (!sunriseMs || !sunsetMs) {
        return true;
    }

    const sunriseHours = new Date(sunriseMs * 1000).getHours();
    const sunsetHours = new Date(sunsetMs * 1000).getHours();
    const timeHours = new Date(dateTimeMs * 1000).getHours();

    return timeHours > sunriseHours && timeHours < sunsetHours;
};
