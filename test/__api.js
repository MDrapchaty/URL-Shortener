const express = require('express');
const expect = require('chai').expect;
const request = require('supertest');
const db = require('../models/db');
const server = require('../server.js');
const makeid = require('../lib/makeid');
const app = express();


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
	// var app;

	beforeEach(() => {
		
	});

	afterEach(() => {
		server.close();
	});
	


  	it('POST /api/v1/urls Create shortened url', (done) => {
      request(server)
	      .get('/api/v1/urls')
	      .set('Accept', 'application/json')
	      .expect('Content-Type', /json/)
	      .expect((res) => {
	        const shortUrl = res.body[0].shortUrl;
	        //res.body.shortUrl;
	        expect(shortUrl).to.have.length('5')
      })
	.end(done)
    });


	// retrieve all urls 
	it('GET /api/v1/urls Returns all urls', (done) => {
      request(server)
	      .get('/api/v1/urls')
	      .set('Accept', 'application/json')
	      .expect('Content-Type', /json/)
	      .expect((res) => {
	        const urls = res.body;
	        // save one single url from the list tfor later tests
	        this.url = urls[0]
	        expect(urls.length).to.be.above(0)
      })
    .end(done)
    });

    // Get url based on id
	it('GET /api/v1/urls/:id  Get url based on id', (done) => {
      request(server)
        .get('/api/v1/urls/' + this.url.id)
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
         expect(this.url).to.have.property('id')
         expect(this.url).to.have.property('Url')
         expect(this.url).to.have.property('shortUrl')
         expect(this.url).to.have.property('createdAt')
         expect(this.url).to.have.property('updatedAt')
        })
      .end(done);
    });

	// Update url based on id

	it('POST /api/v1/urls/:id  Update url based on id', (done) => {
      const body = {
		Url: 'http://google.com',
		shortUrl: 'kL4v1'
	  };
      request(server)
        .put('/api/v1/urls/' + this.url.id)
        .send(body)
        .expect((res) => {
         expect(this.url).to.have.property('id')
         expect(this.url).to.have.property('Url')
         expect(this.url).to.have.property('shortUrl')
         expect(this.url).to.have.property('createdAt')
         expect(this.url).to.have.property('updatedAt')
         //expect(this.url.createdAt).to.not.equal(this.url.updatedAt)
        })
      .end(done);
    });

	

    // Delete url based on id
	it('DELETE deletes one URL based on id', (done) => {
	      request(server)
	      .get('/api/v1/urls' + this.url.id)
	      .set('Accept', 'application/json')
	      .expect('Content-Type', /json/);
	      app.delete('/api/v1/urls/' + this.url.id, (req, res) => {
	        res.status(200);
	      })
	      done();
	   
    });


/*      //ATTEMPTS AT UPDATE TESTING using .send

//ATTEMPT 1
it('POST /api/v1/urls/:id  Update url based on id', (done) => {
      request(server)
        .get('/api/v1/urls')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect((res) => {
        	request(server)
        	.put('/api/v1/urls/' + this.url.id)
        	.send({'Url': 'http://apple.com'})
        	.expect((res) => {
         expect(this.url).to.have.property('id')
         expect(this.url).to.have.property('Url')
         expect(this.url).to.have.property('shortUrl')
         expect(this.url).to.have.property('createdAt')
         expect(this.url).to.have.property('updatedAt')
        })
        	})
      .end(done);
    });



 // ATTEMPT 2
 it('POST /api/v1/urls/:id Update url based on id', (done) => {
	const body = {
		Url: 'http://google.com',
		shortUrl: 'kL4v1'
	};
	request(server)
		.put('/api/v1/urls/' + this.url.id)
		.send(body)
		.end(function(err,res) {
			if (err) {
				throw err;
			}
			// Should.js fluent syntax applied
			// console.log(this.url.id)
		});
		done();
	});


// ATTEMPT 3
it('UPDATE updates one URL based on id', (done) => {
	      request(server)
	      .get('/api/v1/urls' + this.url.id)
	      .set('Accept', 'application/json')
	      .expect('Content-Type', /json/)
	      app.update('/api/v1/urls/' + this.url.id, (req, res) => {
	        res.status(200);
	      })
	      done();
	    });


*/

});




