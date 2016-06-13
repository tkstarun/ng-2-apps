import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {ColorRed} from './ColorRed';

// Create our custom component, using a tag selector
@Component({
	selector: 'my-component',
	template: `
	<div>
	<b>My Component -- IT WORKS :)</b>
<br/>
<span color-red>This should be red</span>
</div>
`,
directives: [ColorRed]
})
export class MyComponent { }

bootstrap(MyComponent);
