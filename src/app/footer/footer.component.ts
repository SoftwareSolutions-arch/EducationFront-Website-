import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getServerPath } from '../../app/shared/app.config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  animal: string;
  name: string;
  PostText : any = [];
  public apiUrl = getServerPath();
  constructor(public dialog: MatDialog, private router: Router, private _httpClient: HttpClient) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(footer_dailog, {
      width: '100%',
      height: '50%',
      // data: {name: this.name, animal: this.animal}
    });
  }

  ngOnInit() {
    let jsoninput = {
      "posttype": "footer"
    }
    this._httpClient.post(`${this.apiUrl}/userapi/getPost`, jsoninput).subscribe((response: any) => {
      if (response.Status == 200) {
        this.PostText = response.result
      } else {
        this.PostText = ""
      }
    })
  }

  Grievances() {
    this.router.navigate(['/grievances']);
  }
  aboutus() {
    this.router.navigate(['/about']);
  }

}




@Component({
  selector: 'footer_dailog',
  templateUrl: 'footer_dailog.html',
})
export class footer_dailog {

  constructor(
    public dialogRef: MatDialogRef<footer_dailog>,
    @Inject(MAT_DIALOG_DATA) public data: footer_dailog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}