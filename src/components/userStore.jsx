import { extendObservable } from 'mobx';

class UserStore {
    constructor() {
        extendObservable(this, {

            loading: false, //true
            isLoggedIn: false,
            username: ''
            
        })
    }
}

export default new UserStore();