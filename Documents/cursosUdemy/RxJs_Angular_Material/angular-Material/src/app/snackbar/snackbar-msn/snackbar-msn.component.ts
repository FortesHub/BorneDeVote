import { Component, Inject, OnInit  } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-msn',
  templateUrl: './snackbar-msn.component.html',
  styleUrls: ['./snackbar-msn.component.scss']
})
export class SnackbarMsnComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string,
  public matSnackBarRef: MatSnackBarRef<SnackbarMsnComponent>
  ) { }

  ngOnInit(): void {
  }

  public closeSnackBar(){
    this.matSnackBarRef.dismiss()
  }

}
