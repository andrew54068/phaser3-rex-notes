import MarkedEventSheets from '../../plugins/markedeventsheets.js';
import EventEmitter from 'eventemitter3';
import eventSheet0 from 'raw-loader!/assets/markedeventsheet/parallel/parallel0.md';
import eventSheet1 from 'raw-loader!/assets/markedeventsheet/parallel/parallel1.md';

class CommandExecutor extends EventEmitter {
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
    commandExecutor: new CommandExecutor(),    
});

manager
    .addEventSheet(eventSheet0)
    .addEventSheet(eventSheet1);

console.log(manager.dumpTrees())

manager
    .setData('coin', 10)
    .on('eventsheet.enter', function (title) {
        console.log(`..Enter event sheet '${title}'..`)
    })
    .on('eventsheet.exit', function (title) {
        console.log(`..Exit event sheet '${title}'..`)
    })
    .on('eventsheet.catch', function (title) {
        console.log(`..Fail event sheet '${title}'..`)
    })
    .on('complete', function () {
        console.log('..Execute events complete..')
    })
    .start()

console.log(manager.memory)
