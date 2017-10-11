
class YargsMock {
  constructor() {
    this.argv = {};
  }

  __setArg(key, value) {
    this.argv[key] = value;
  }

  __clearArgs() {
    Object.keys(this.argv).forEach(key => {
      delete this.argv[key]
    })
  }
}

module.exports = new YargsMock();
