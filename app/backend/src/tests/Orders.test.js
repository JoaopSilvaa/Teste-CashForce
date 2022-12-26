const frisby = require('frisby');
require('dotenv').config();

// eslint-disable-next-line max-lines-per-function
describe('Orders Tests', () => {
  it('Show all orders in Database', async () => {
    await frisby
      .get('http://localhost:3030/orders/')
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json).not.toBeNull();
        expect(json.length).toBe(3);
        expect(json[0].orderNfId).toBe('1605181324132');
      });
  });

  it('Show a order by Id of Database', async () => {
    await frisby
      .get('http://localhost:3030/orders/1')
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json).not.toBeNull();
        expect(json.orderNfId).toBe('1605181324132');
        expect(json.orderNumber).toBe('18153');
      });
  });

  it('Throws an error if it doesn\'t find the order', async () => {
    await frisby
      .get('http://localhost:3030/orders/5')
      .expect('status', 404)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Order not Found');
      });
  });
});