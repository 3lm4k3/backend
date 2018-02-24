import * as FireStore from 'firebase-admin';
import * as Functions from 'firebase-functions';
import { Interest } from '../embeded/interest';
export class InterestDao {

    private _app: FireStore.app.App;
    constructor() {
        console.log("Creating InterestDao");
        this._app = FireStore.initializeApp(Functions.config().firebase);

    }

    public add(v: Interest): void {
       const doc = FireStore.firestore().doc("s");
        doc.set({ email:v});

    }
}