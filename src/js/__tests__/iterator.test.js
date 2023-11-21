import Team from '../app';

test('осуществляется перебор объекта', () => {
  const testCharacter = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const team = new Team([
    {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ]);

  function getChar(obj) {
    let value;
    for (const item of obj) {
      value = item;
    }
    return value;
  }
  expect(getChar(team)).toEqual(testCharacter);
});
