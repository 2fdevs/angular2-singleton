import {Component, Template} from 'angular2/angular2';
import {Hello} from 'hello';
import {SingletonService} from 'SingletonService';

@Component({
    selector: 'application'
})
@Template({
    url: 'application.html',
    directives: [Hello]
})
export class Application {
    constructor() {
        SingletonService.getInstance().setMessage("this is a common message");
    }
}
