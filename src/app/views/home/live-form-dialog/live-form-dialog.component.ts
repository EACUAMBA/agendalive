import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LiveService } from 'src/app/shared/service/live.service';
import * as moment from 'moment';


@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css']
})
export class LiveFormDialogComponent implements OnInit {
  public liveForm: FormGroup;
  

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    public liveService: LiveService,
  ) { }

  ngOnInit(): void {
    this.liveForm = this.formBuilder.group({
      liveName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      liveDate: ['', [Validators.required]],
      liveTime: ['', [Validators.required]],
      liveLink: ['', [Validators.required]],

    });
  }



  createLive(){
    let newDate: moment.Moment = moment.utc(this.liveForm.value.liveDate).local();
		this.liveForm.value.liveDate = newDate.format("YYYY-MM-DD") + "T" + this.liveForm.value.liveTime;
    this.liveService.postLive(this.liveForm.value).subscribe(data=>{});
    this.liveForm.reset();
    this.dialogRef.close();
  }
/**
 * Metodo para fechar o Dialog
 */
  cancelar(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }

}
