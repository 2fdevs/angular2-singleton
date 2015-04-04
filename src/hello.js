import {Component, Template, bootstrap, If} from 'angular2/angular2';
import {SingletonService} from 'SingletonService';

@Component({
    selector: 'hello'
})
@Template({
    inline: `<span *if="name">Hello, {{name}}!</span>`,
    directives: [If]
})
export class Hello {
    name:String = 'World';

    constructor() {
        setTimeout(() => {
          this.name = SingletonService.getInstance().getMessage();
        }, 2000);
    }
}
