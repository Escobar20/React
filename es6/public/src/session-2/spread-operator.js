import { sum } from './rest-parameters';

export const average = (...elements) => (elements.length > 0) ? sum(...elements) / elements.length : 0;
