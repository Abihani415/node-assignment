import events from 'events';

const myEmitter = new events.EventEmitter();
// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');

// myEmitter.on('event', function(a, b) {
//     console.log(a, b, this, this === myEmitter);
//     // Prints:
//     //   a b MyEmitter {
//     //     domain: null,
//     //     _events: { event: [Function] },
//     //     _eventsCount: 1,
//     //     _maxListeners: undefined } true
//   });
//   myEmitter.emit('event', 'a', 'b');

myEmitter.on('event', (a, b) => {
  console.log(11, a, b, this);
  // Prints: a b {}
});

myEmitter.on('event', (a, b) => {
  console.log(22, a, b, this);
  // Prints: a b {}
});
console.log(myEmitter.listeners('event'));
myEmitter.emit('event', 'a', 'b');

const myEE = new events.EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
