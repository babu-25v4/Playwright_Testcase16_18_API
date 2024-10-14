import { test, expect } from '@playwright/test';

test.describe('API Testing with Playwright', () => {
  
  test('POST request - Successful login', async ({ request }) => {
    const response = await request.post('/api/login', {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Response Token:', responseBody.token);
  });

  test('DELETE request - Delete user 4', async ({ request }) => {
    const response = await request.delete('/api/users/4');

    expect(response.status()).toBe(204);
  });

  test('PUT request - Update user 7', async ({ request }) => {
    const response = await request.put('/api/users/7', {
      data: {
        name: 'Updated User',
        job: 'Updated Job Title'
      }
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log('Updated User Response:', responseBody);
  });
});
//executed the command npx playwright test apitesting.spec.js