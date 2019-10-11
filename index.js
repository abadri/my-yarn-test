module.exports = {
  foo: 'hello',
  bar: 'world',
  getFoo() {
    return this.foo;
  },
  getBar() {
    return this.bar;
  }
};