class Foo {
  constructor() {
    this._foo = 'hello';
    this._bar = 'world';
  }

  getFoo() {
    return this._foo;
  }

  getBar() {
    return this._bar;
  }
}

module.exports = new Foo();