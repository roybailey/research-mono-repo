module.exports = {
  translate: (key, options) => { return options ? `translate(${key}, ${JSON.stringify(options)})`: `translate(${key})`; },
  Translate: (props) => { return `Translate(${JSON.stringify(props)})`; },
};
