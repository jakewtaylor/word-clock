import { randomNumber } from "./randomNumber";

export const randomString = (length) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let string = '';

    for (let i = 0; i < length; i++) {
        string += alphabet[randomNumber(alphabet.length - 1)];
    }

    return string;
};
