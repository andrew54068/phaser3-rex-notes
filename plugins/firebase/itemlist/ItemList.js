import EventEmitterMethods from '../../utils/eventemitter/EventEmitterMethods.js';
import GetValue from '../../utils/object/GetValue.js';
import ItemMethods from './ItemMethods.js';
import DefaultGetItemCallback from './callbacks/DefaultGetItemCallback.js';
import UpdateOnce from './updaters/UpdateOnce.js';
import UpdateChild from './updaters/UpdateChild.js';
import UpdateAll from './updaters/UpdateAll.js';

class ItemList {
    constructor(config) {
        // Event emitter
        var eventEmitter = GetValue(config, 'eventEmitter', undefined);
        var EventEmitterClass = GetValue(config, 'EventEmitterClass', undefined);
        this.setEventEmitter(eventEmitter, EventEmitterClass);

        this.isUpdating = false;
        this.items = [];
        this.itemID2Index = {};
        this.eventNames = {
            update: GetValue(config, 'eventNames.update', 'update'),
            add: GetValue(config, 'eventNames.add', 'add'),
            remove: GetValue(config, 'eventNames.remove', 'remove'),
            change: GetValue(config, 'eventNames.change', 'change')
        }
        this.setItemIDKey(GetValue(config, 'itemIDKey', '__itemID__'));
        this.setMode(GetValue(config, 'mode', 1));
        this.setGetitemCallback(Getvalue(config, 'getItemCallback', DefaultGetItemCallback), Getvalue(config, 'getItemCallbackScope', this));
        this.setQuery(GetValue(config, 'query', undefined));
    }

    setItemIDKey(key) {
        this.keyItemID = key;
        return this;
    }

    setMode(mode) {
        if (typeof (mode) === 'string') {
            mode = MODE[mode];
        }

        this.mode = mode;
        this.updater = Updaters[mode];
        return this;
    }

    setGetitemCallback(callback, scope) {
        this.getItemCallback = callback;
        this.getItemCallbackScope = scope;
        return this;
    }

    setQuery(query) {
        this.query = query;
        return this;
    }

    startUpdate(query) {
        if (query) {
            this.setQuery(query);
        } else if (this.query) {
            query = this.query;
        } else { // !query && !this.query
            return this;
        }

        this
            .stopUpdate()
            .clear();

        this.isUpdating = true;
        this.updater.start.call(this, query);
        return this;
    }

    stopUpdate() {
        if ((!this.query) || (!this.isUpdating)) {
            return this;
        }

        this.isUpdating = false;
        this.updater.stop.call(this);
        return this;
    }
}

Object.assign(
    ItemList.prototype,
    EventEmitterMethods,
    ItemMethods
);

const Updaters = {
    0: UpdateOnce,
    1: UpdateChild,
    2: UpdateAll
};

const MODE = {
    once: 0,
    child: 1,
    all: 2
}

export default ItemList;