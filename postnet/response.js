class Response {
  constructor(code, data, router, reset) {
    this.code = code;
    this.data = data;
    this.router = router;
    this.reset = reset || false;
    this._reset = reset;
  }

  get reset() {
    return this._reset;
  }

  set reset(value) {
    this._reset = value;
  }
}

module.exports = Response;
