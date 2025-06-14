// https://leetcode.com/problems/event-emitter/


class EventEmitter {
    constructor() {
        this.events = {}; // store eventName: [callbackObj]
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        const subscription = { callback };
        this.events[eventName].push(subscription);

        return {
            unsubscribe: () => {
                this.events[eventName] = this.events[eventName].filter(
                    sub => sub !== subscription
                );
                return undefined;
            }
        };
    }
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];
        return this.events[eventName].map(sub => sub.callback(...args));
    }
}
