import { Component, OnInit , Inject } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog' ;

export interface popup_download {
  animal: String;
  name: string;
}

@Component({
  selector: 'app-engineering',
  templateUrl: './engineering.component.html',
  styleUrls: ['./engineering.component.css']
})
export class EngineeringComponent implements OnInit {
  animal:string;
  name: string;
  constructor(public dialog: MatDialog, private router: Router,) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(popup_download, {
        // width: '100%',
        height: '80%',
        data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }

    openDialog1(): void {
      const dialogRef = this.dialog.open(answerpopup2, {
        width: '30%',
        height: '60%',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }

    openDialog3(): void {
      const dialogRef = this.dialog.open(quepopup, {
         width: '50%',
        height: '77%',
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
      
  ngOnInit() {
  }
redirect() {
  this.router.navigate(['/exam_in_india']);

}
redirect_paper() {
  this.router.navigate(['/articles']);
  
}
redirect_articles() {
  this.router.navigate(['/sample_paper']);

}

redirect_appform() {
  this.router.navigate(['/college_review']);
}
}


@Component({
  selector: 'popup_download',
  templateUrl: 'popup_download.html',
})
export class popup_download {

  constructor(
    public dialogRef: MatDialogRef<popup_download>,
    @Inject(MAT_DIALOG_DATA) public data: popup_download) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
@Component({
  selector: 'answerpopup2',
  templateUrl: 'answerpopup2.html',
})
export class answerpopup2 {

  constructor(
    public dialogRef: MatDialogRef<answerpopup2>,
    @Inject(MAT_DIALOG_DATA) public data: answerpopup2) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


@Component({
  selector: 'quepopup',
  templateUrl: 'quepopup.html',
})
export class quepopup {

  constructor(
    public dialogRef: MatDialogRef<quepopup>,
    @Inject(MAT_DIALOG_DATA) public data: quepopup) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}