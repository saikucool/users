import { MockData } from '../testing/mock-data';
import { of, BehaviorSubject } from 'rxjs';

export class AppServiceStub {
    data$;
    getData() {
        return of(MockData.TEST); // of = rxjs
    }
    setData() {
        this.data$ = MockData.TEST;
    }
}