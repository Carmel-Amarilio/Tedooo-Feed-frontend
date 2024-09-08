export const utilService = {
    formDate,
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







