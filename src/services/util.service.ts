export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
    makeLorem,
    getRandomIntInclusive,
    debounce,
    formDate,
}

function saveToStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromStorage(key: string) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}

function makeId(length: number = 6): string {
    let txt = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function makeLorem(size: number = 100): string {
    const words = [
        'The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All',
        'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally',
        'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'
    ];
    let txt = '';
    while (size > 0) {
        size--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt.trim();
}

function getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive 
}

function debounce<T extends (...args: any[]) => void>(func: T, timeout: number = 300): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>): void => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function formDate(timestamp: string): string {
    const now: Date = new Date();
    const past: Date = new Date(timestamp);
    const diff: number = now.getTime() - past.getTime();

    const seconds: number = Math.floor(diff / 1000);
    const minutes: number = Math.floor(seconds / 60);
    const hours: number = Math.floor(minutes / 60);
    const days: number = Math.floor(hours / 24);
    const years: number = Math.floor(days / 365);

    if (years > 0) return `${years}y`
    else if (days > 0) return `${days}d`
    else if (hours > 0) return `${hours}h`
    else if (minutes > 0) return `${minutes}m`
    else return `${seconds}s`
}







