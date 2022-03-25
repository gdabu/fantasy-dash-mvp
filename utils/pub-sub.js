/*
 * Small publish / subscribe to events module
 * ------------------------------------------
 *
 * Publish
 *
 * @param name [string]
 * @param args [array] pass to callback function
 *
 * Subscribe
 *
 * @param name [string] ( same as publish name )
 * @param callback [function]
 */

/* Variables */

const subscriptions = {};

/* Functions */

const publish = (name, args = []) => {
  if (!Object.prototype.hasOwnProperty.call(subscriptions, name)) return;

  const callbacks = subscriptions[name];

  if (callbacks)
    callbacks.forEach((callback) => {
      callback(args);
    });
};

const subscribe = (name, callback = () => {}) => {
  if (!Object.prototype.hasOwnProperty.call(subscriptions, name))
    subscriptions[name] = [];

  const index = subscriptions[name].push(callback) - 1;

  // remove subscription
  return {
    remove: () => {
      delete subscriptions[name][index];
    },
  };
};

/* Export */

export { publish, subscribe };
