import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-button',
  templateUrl: 'app/js/shared/components/form/button.html'
})

export class ButtonComponent {
	@Input() label = "Search";
}
