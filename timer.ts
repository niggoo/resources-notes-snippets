export class Timer {
    private timerId: number;
    private start: number;
    private remaining: number;

    private callback: () => void;

    constructor(callback: () => void, delay: number) {
        this.remaining = delay;
        this.resume();
    }

    pause() {
        clearTimeout(this.timerId);
        this.remaining -= (Date.now() - this.start);
    }
    resume() {
        this.start = Date.now();
        clearTimeout(this.timerId);
        this.timerId = setTimeout(this.callback, this.remaining);
    }
}
