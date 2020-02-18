import { LoaderService } from './../loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {


  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit(): void {

  }


  showSpinner() {
    this.loaderService.status.next(true);
    setTimeout(() => {
      this.loaderService.status.next(false);
    }, 10000);
  }

  hideSpinner() {
    this.loaderService.status.next(false);
  }

}
