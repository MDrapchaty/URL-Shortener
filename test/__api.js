// const express = require('express');
const expect = require('chai').expect;
const request = require('supertest');
// const db = require('../models/db');

var server = require('../server.js');

// Testing .env matches datbase information
  describe('Database', () => {
    it('Environmnetal variables match database requirements', () => {
      request(server);
      expect(db.sequelize.config.database).to.equal(process.env.DB_NAME);
      expect(db.sequelize.config.username).to.equal(process.env.DB_USER);
      expect(db.sequelize.config.password).to.equal(process.env.DB_PASS);
      expect(db.sequelize.config.host).to.equal(process.env.DB_HOST);
      expect(db.sequelize.options.dialect).to.equal(process.env.DB_SCHEMA);
      expect(db.sequelize.config.port).to.equal(process.env.DB_PORT);
    });
  });




// Testing for api routes
describe('API Routes', () => {
	// var server;
	var app;

	beforeEach(() => {
		
	});

	afterEach(() => {
		server.close();
	});
	// GET all urls 
	it('GET /api/v1/urls retrieves all urls', (done) => {
      request(server)
	      .get('/api/v1/urls')
	      .set('Accept', 'application/json')
	      .expect('Content-Type', /json/)
	      .expect((res) => {
	        const urls = res.body;
	        // save one single url from the list to test on later
	        this.url = urls[0]
	        expect(urls.length).to.be.above(0)
      })
    .end(done)
    });

});




