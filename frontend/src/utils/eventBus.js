import mitt from 'mitt';

const eventBus = mitt();

window.eventBus = eventBus;

export default eventBus;
