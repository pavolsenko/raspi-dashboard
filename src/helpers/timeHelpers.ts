export const isDay = (sunrise: number, sunset: number): boolean => {
    return Date.now() > sunrise * 1000 && Date.now() < sunset * 1000;
};
