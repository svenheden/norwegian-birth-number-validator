const test = require('tape');
const isValid = require('./index');

test('birth numbers in an erroneous format', assert => {
  assert.notOk(isValid('12345'));
  assert.notOk(isValid('123456789123456789'));
  assert.notOk(isValid('abc'));
  assert.notOk(isValid('191a0831-7574'));
  assert.notOk(isValid('19610603!1757'));
  assert.end();
});

test('birth numbers with a correct checksum but incorrect date', assert => {
  assert.notOk(isValid('000000-00000'));
  assert.notOk(isValid('321210-15683'));
  assert.notOk(isValid('211316-33340'));
  assert.notOk(isValid('300255-32542'));
  assert.end();
});

test('valid birth numbers', assert => {
  assert.ok(isValid('151210-15649'));
  assert.ok(isValid('03098443559'));
  assert.ok(isValid('210816-33352'));
  assert.ok(isValid('16074530617'));
  assert.ok(isValid('270755-32585'));
  assert.end();
});

test('invalid birth numbers', assert => {
  assert.notOk(isValid('270755-31585'));
  assert.notOk(isValid('230112-44588'));
  assert.notOk(isValid('281588-17947'));
  assert.notOk(isValid('170148-29936'));
  assert.notOk(isValid('110890-31893'));
  assert.end();
});
