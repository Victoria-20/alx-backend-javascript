const expect = require('chai').expect;


const getPaymentTokenFromApi = require('./6-payment_token');

describe('getPaymentTokenFromApi', () => {
  it('test if output is true', () => new Promise((done) => {
    getPaymentTokenFromApi(true)
      .then((res) => {
        expect(res).to.include({ data: 'Successful response from the API' });
        done();
      })
      .catch((err) => done(err));
  }));
});
