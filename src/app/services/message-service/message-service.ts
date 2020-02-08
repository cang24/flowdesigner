import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DEIItem } from '../design-service/model/dei-item';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<any>();

    sendMessage(deiItem: DEIItem) {
        console.log("Sending the message: [" + deiItem + "]");
        // this.subject.next({ dei: deiItem });
        this.subject.next(deiItem);
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}