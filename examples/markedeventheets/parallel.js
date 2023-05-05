import MarkedEventSheets from '../../plugins/logic/eventsheets/markedeventsheets/MarkedEventSheets.js';
import EventEmitter from 'eventemitter3';
import eventSheet0 from 'raw-loader!/assets/markedeventsheet/parallel0.md';
import eventSheet1 from 'raw-loader!/assets/markedeventsheet/parallel1.md';

class TaskHandlers extends EventEmitter {
    constructor({
        waitDuration = 1000
    } = {}) {
        super();

        this.defaultWaitDuration = waitDuration;
    }

    print({
        text = ''
    } = {}, manager) {
        console.log(text);
    }

    set(config, manager) {
        for (var name in config) {
            manager.setData(name, config[name]);
        }
    }

    wait({
        duration = this.defaultWaitDuration
    } = {}, manager) {
        var self = this;
        setTimeout(function () {
            self.complete();
        }, duration)
        return this;
    }

    complete() {
        this.emit('complete');
        return this;
    }
}

var manager = new MarkedEventSheets({
    taskHandlers: new TaskHandlers(),
    parallel: true
});

manager
    .addEventSheet(eventSheet0)
    .addEventSheet(eventSheet1);

console.log(manager.dumpTrees())

manager
    .setData('coin', 10)
    .on('complete', function () {
        console.log('..Execute events complete..')
    })
    .tick()

console.log(manager.dumpData())
