import AddChildCallback from '../callbacks/AddChildCallback.js';
import RemovechildCallback from '../callbacks/RemoveChildCallback.js';
import ChangeChildCallback from '../callbacks/ChangeChildCallback.js';

var Updater = {
    start(query) {
        query.on('child_added', AddChildCallback, this);
        query.on('child_removed', RemovechildCallback, this);
        query.on('child_moved', ChangeChildCallback, this);
        query.on('child_changed', ChangeChildCallback, this);
        return this;
    },
    stop() {
        this.query.off('child_added', AddChildCallback, this);
        this.query.off('child_removed', RemovechildCallback, this);
        this.query.off('child_moved', ChangeChildCallback, this);
        this.query.off('child_changed', ChangeChildCallback, this);
        return this;
    },
}
export default Updater;