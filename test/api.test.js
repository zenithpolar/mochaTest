const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');


describe('API Test', function () {
    describe('api/invalid', function () {
        it('should return 404', function () {
            return request(app).get('/api/invalid').expect(404);
        });
    });
    describe('api/sumone', function () {
        it('should sum 1', async function () {
            let res = await request(app).get('/api/sumone/1');
            expect(res.statusCode).to.be.equal(200);
            expect(res.text).equal('2');
        });
        it('should NaN', function () {
            return request(app).get('/api/sumone/batata').expect(200)
                .then((res, err) => {
                    expect(res.text).to.be.equal('NaN');
                })
        });
    });
    describe('api/divide', function () {
        it('should halve', function () {
            return request(app).get('/api/divide/10/by/2').expect(200)
                .then((res) => {
                    expect(res.text).to.be.equal('5');
                })
        });
        it('should return Infinity', function () {
            return request(app).get('/api/divide/5/by/0').expect(200)
                .then((res, err) => {
                    expect(res.text).to.be.equal('Infinity');
                })
        });
    });
    describe('api/multiply', function () {
        it('should double', function () {
            return request(app).get('/api/multiply/10/by/2').expect(200)
                .then((res, err) => {
                    expect(res.text).to.be.equal('20');
                })
        });
        it('should return 0', function () {
            return request(app).get('/api/multiply/5/by/0').expect(200)
                .then((res) => {
                    expect(res.text).to.be.equal('0');
                })
        });
    });
});