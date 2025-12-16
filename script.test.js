import add from './script.js';
import getUser from './app.js'; 

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds -1 + 1 to equal 0', () => {
  expect(add(-1, 1)).toBe(0);
});

test('returns user when userId is provided', () => {
  const res = getUser(1);
  expect(res.status).toBe(200);
  expect(res.user.name).toBe('Ganesh');
});

test('fails when userId is missing', () => {
  const res = getUser();
  expect(res.status).toBe(400);
});