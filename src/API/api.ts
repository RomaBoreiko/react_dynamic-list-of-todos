export const BASE_URL = 'https://mate.academy/students-api';

const todosEnd = '/todos';
const userEnd = '/users/';

export function request(end: string, userId: number | string = '') {
  return fetch(`${BASE_URL}${end}${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export function getTodos(): Promise<Todo[]> {
  return request(todosEnd);
}

export function getCurrentUser(userId: number): Promise<User> {
  return request(userEnd, userId);
}
