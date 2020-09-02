import * as handlers from './handlers';

describe('use-list-state handlers', () => {
  test('append: adds one item to the end of the list', () => {
    expect(handlers.append([1], 2)).toEqual([1, 2]);
  });

  test('append: adds more than one item to the end of the list', () => {
    expect(handlers.append([1], 2, 3)).toEqual([1, 2, 3]);
    expect(handlers.append([1], 2, 3, 4)).toEqual([1, 2, 3, 4]);
    expect(handlers.append([1], 2, 3, 4, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  test('prepend: adds one item to the start of the list', () => {
    expect(handlers.prepend([1], 2)).toEqual([2, 1]);
  });

  test('prepend: adds more than one item to the start of the list', () => {
    expect(handlers.prepend([1], 2, 3)).toEqual([2, 3, 1]);
    expect(handlers.prepend([1], 2, 3, 4)).toEqual([2, 3, 4, 1]);
    expect(handlers.prepend([1], 2, 3, 4, 5)).toEqual([2, 3, 4, 5, 1]);
  });

  test('insert: inserts one item to the given position of the list', () => {
    expect(handlers.insert(['first', 'second'], 1, 'one-half')).toEqual([
      'first',
      'one-half',
      'second',
    ]);
  });

  test('insert: inserts multiple items to the given position of the list', () => {
    expect(handlers.insert(['first', 'second'], 1, 'one-half', 1.7, 1.9, 'almost-there')).toEqual([
      'first',
      'one-half',
      1.7,
      1.9,
      'almost-there',
      'second',
    ]);
  });

  test('remove: removes item at given position of the list', () => {
    expect(handlers.remove([1, 2, 3, 4, 5], 0)).toEqual([2, 3, 4, 5]);
    expect(handlers.remove([1, 2, 3, 4, 5], 1)).toEqual([1, 3, 4, 5]);
    expect(handlers.remove([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 4, 5]);
    expect(handlers.remove([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3, 5]);
    expect(handlers.remove([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 4]);
  });

  test('remove: removes multiple items at given positions of the list', () => {
    expect(handlers.remove([1, 2, 3, 4, 5], 0, 2)).toEqual([2, 4, 5]);
    expect(handlers.remove([1, 2, 3, 4, 5], 1, 2)).toEqual([1, 4, 5]);
    expect(handlers.remove([1, 2, 3, 4, 5], 2, 3, 4)).toEqual([1, 2]);
    expect(handlers.remove([1, 2, 3, 4, 5], 3, 0)).toEqual([2, 3, 5]);
    expect(handlers.remove([1, 2, 3, 4, 5], 0, 1, 2, 3, 4)).toEqual([]);
  });
});
