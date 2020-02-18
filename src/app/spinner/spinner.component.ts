import { LoaderService } from './../loader.service';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent {

  showLoader$ = this.loaderService.status;

  constructor(
    private loaderService: LoaderService
  ) { }

}
