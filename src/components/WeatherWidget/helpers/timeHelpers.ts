export const normalizeTime = (value: number | Date = 0): string => {
    let date: Date;
    if (Number.isInteger(value)) {
        date = new Date((value || 0) as number * 1000);
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

export const getDayOfTheWeek = (dayOfTheWeek: number): string => {
    if (dayOfTheWeek === 0) {
        return 'Sunday';
    }

    if (dayOfTheWeek === 1) {
        return 'Monday';
    }

    if (dayOfTheWeek === 2) {
        return 'Tuesday';
    }

    if (dayOfTheWeek === 3) {
        return 'Wednesday';
    }

    if (dayOfTheWeek === 4) {
        return 'Thursday';
    }

    if (dayOfTheWeek === 5) {
        return 'Friday';
    }

    if (dayOfTheWeek === 6) {
        return 'Saturday';
    }

    return '';
};
