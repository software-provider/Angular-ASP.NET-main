import { Component, InjectFlags, OnInit } from '@angular/core'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-processbar',
  templateUrl: './processbar.component.html',
  styleUrls: ['./processbar.component.scss']
})
export class ProcessBarComponent implements OnInit {

  processComplete: boolean = false;
  stepSize: number = 0;
  msg: string[] = ["Init","Waiting","Waiting","Waiting"];
  processVal: number = 0;

  constructor(public activeModal: NgbActiveModal) { }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit(): void {
    if (this.stepSize < 5)
      this.delay(3000).then(() => {
        this.msg[this.stepSize] = "Init";
        this.stepUp();
        this.delay(1000).then(() => {
          this.msg[this.stepSize] = "Perocessing";
          this.stepUp();
          this.delay(5000).then(() => {
            this.msg[this.stepSize] = "Completed";
            this.stepUp();
            this.stepSize++;
            this.ngOnInit();
          });
        });
      });
  }

  stepUp() {
    this.processVal += 7;
  }
}
