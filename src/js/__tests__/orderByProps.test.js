import orderByProps from '../orderByProps';

describe('orderByProps:', () => {
  test('should return array sorted by income filter', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };
    const result = orderByProps(obj, ['name', 'level']);
    expect(result).toEqual([{ name: 'мечник' }, { level: 2 }, { attack: 80 }, { defence: 40 }, { health: 10 }]);
  });
  test('should return array sorted by alphabet', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };
    const result = orderByProps(obj);
    expect(result).toEqual([{ attack: 80 }, { defence: 40 }, { health: 10 }, { level: 2 }, { name: 'мечник' }]);
  });
});
