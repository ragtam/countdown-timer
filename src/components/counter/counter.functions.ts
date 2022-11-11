const format = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 2,
    signDisplay: 'never'
});

export function formatSeconds(milliseconds: number): string {
    const s = Math.floor(milliseconds / 1000 % 60);
    const m = Math.floor((milliseconds / 1000 / 60) % 60);
    const h = Math.floor((milliseconds / 1000 / (60 * 60)) % 24);
    return `${format.format(h)}:${format.format(m)}:${format.format(s)}`;
}
