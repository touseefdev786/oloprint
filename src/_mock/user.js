import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

async function fetchUsers() {
  const response = await fetch('http://localhost:3005/auth/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const data = await response.json();

  return data.map((_, index) => ({
    id: faker.string.uuid(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    name: _?.firstName,
    company: faker.company.name(),
    isVerified: faker.datatype.boolean(),
    status: sample(['active', 'banned']),
    role: _?.role
  }));
}

export const users = await fetchUsers();
