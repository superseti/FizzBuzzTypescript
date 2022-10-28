import { getItem } from './fizzbuzzItem';

export const getResult = () => {
    const items = Array.from({ length: 100 }, (value, key) => key).map((number: number) => getItem(number + 1));
    const result = items.join(' ');
    return result;
};