const records = [
  { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [{ value: 'jack@example.com' }] },
  { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [{ value: 'jill@example.com' }] }
];

exports.findOne = function(user) {
  for (let i = 0, len = records.length; i < len; i++) {
    const record = records[i];
    if (record.username === user.username && record.passpord === user.passpord) {
      return record;
    }
  }
  return null;
}