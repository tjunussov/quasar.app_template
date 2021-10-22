
export default ({ Vue }) => {

  Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
  };

  Storage.prototype.getObject = function(key, defaultVal) {
    var value = this.getItem(key);
    if(!value && defaultVal) {
      this.setItem(key, JSON.stringify(defaultVal));
      return defaultVal;
    }
    return value && JSON.parse(value);
  };

};
