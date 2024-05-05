export const formatISODate = (date: Date): string => {
    const year = date.getFullYear(),
        day = date.getDate().toString().padStart(2, '0'),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),

        hours = date.getHours().toString().padStart(2, '0'),
        minutes = date.getMinutes().toString().padStart(2, '0'),
        seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}