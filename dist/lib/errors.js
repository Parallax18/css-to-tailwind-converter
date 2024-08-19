export class InvalidColorError extends Error {
    constructor(value) {
        super(`Invalid color value: ${value}`);
        this.name = "InvalidColorError";
    }
}
export class InvalidUnitError extends Error {
    constructor(value) {
        super(`Invalid unit value: ${value}`);
        this.name = "InvalidUnitError";
    }
}
