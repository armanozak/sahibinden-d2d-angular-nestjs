import { getGreeting } from '../support/app.po';

describe('fullstack', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to fullstack!');
  });
});
