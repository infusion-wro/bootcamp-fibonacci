var expect = require('chai').expect;
var fibonacci = require('../fibonacci');

describe('fibonacci', function() {
  this.timeout(50);

  it('should calculate value for 0', function(done){
    expect(fibonacci(0)).to.equal(0);
    done();
  });

  it('should calculate value for 1', function(done){
    expect(fibonacci(1)).to.equal(1);
    done();
  });

  it('should calculate value for 2', function(done){
    expect(fibonacci(2)).to.equal(1);
    done();
  });

  it('should calculate value for 9', function(done){
    expect(fibonacci(9)).to.equal(34);
    done();
  });

  it('should calculate value for 21', function(done){
    expect(fibonacci(21)).to.equal(10946);
    done();
  });

  it('should calculate value for 35', function(done){
    expect(fibonacci(35)).to.equal(9227465);
    done();
  });
})
