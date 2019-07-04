const app = require('../app');
const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');


describe('Messages Test', function () {
    describe('message/hello', function () {
        it('should return "Hello Roberto"', async function () {
            let res = await request(app).get('/message/hello/Roberto');
            expect(res.statusCode).to.be.equal(200);
            expect(res.text).equal('Hello Roberto');
        });
        it('should return "Hello World"', async function () {
            let res = await request(app).get('/message/hello');
            expect(res.statusCode).to.be.equal(200);
            expect(res.text).equal('Hello World');
        });
    });
    describe('message/bye', function () {
        it('should return "Bye Roberto"', function () {
            return request(app).get('/message/bye/Roberto').expect(200)
                .then((res) => {
                    expect(res.text).to.be.equal('Bye Roberto');
                })
        });
        it('should return "Bye World"', function () {
            return request(app).get('/message/bye').expect(200)
                .then((res, err) => {
                    expect(res.text).to.be.equal('Bye World');
                })
        });
    });
});