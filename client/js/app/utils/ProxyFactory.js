class ProxyFactory {

    static create(object, properties, action) {
        return new Proxy(object, {

            get(target, property, receiver) {
                if(properties.includes(property) && ProxyFactory._isFunction(target[property])) {
                    return function() {
                        Reflect.apply(target[property], target, arguments);
                        return action(target);
                    }
                }

                return Reflect.get(target, property, receiver);
            },
            set(target, property, value, receiver) {
                if(properties.includes(property)) {
                    action(target);
                }
                
                return Reflect.set(target, property, value, receiver);
            }

        });
    }

    static _isFunction(property) {
        return typeof(property) == typeof(Function);
    }

}