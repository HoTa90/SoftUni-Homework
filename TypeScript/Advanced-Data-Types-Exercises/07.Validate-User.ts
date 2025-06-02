type User = {
  id: number | string;

  username: string;

  passwordHash: string | string[];

  status: 'Locked' | 'Unlocked' | 'Deleted';

  email?: string;
};

function validateUser(user: unknown): user is User {
  return (
    user != undefined &&
    typeof user === 'object' &&
    'id' in user &&
    ((typeof user.id === 'number' && user.id > 100) ||
      (typeof user.id === 'string' && user.id.length === 14)) &&
    'username' in user &&
    typeof user.username === 'string' &&
    user.username.length >= 5 &&
    user.username.length <= 10 &&
    'passwordHash' in user &&
    ((typeof user.passwordHash === 'string' && user.passwordHash.length === 20) ||
      (Array.isArray(user.passwordHash) &&
        user.passwordHash.length === 4 &&
        user.passwordHash.every((el) => typeof el === 'string' && el.length === 8))) &&
    'status' in user &&
    (user.status === 'Locked' || user.status === 'Unlocked')
  );
}

let user = { id: 1344, username: 'wow123', passwordHash: '123456-123456-1234567',

status: 'Locked', email: 'something@abv.bg' }

console.log(validateUser(user));
