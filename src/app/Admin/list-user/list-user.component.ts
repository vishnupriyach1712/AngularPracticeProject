import { Component, OnInit, ViewChild } from '@angular/core';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { DataManagementService } from 'src/app/Services/DataManagement/data-management.service';
import { Users } from 'src/app/Models/UserData';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor( public dataService : DataManagementService,
    private router: Router,) { }


  public gridData: Users[] = this.dataService.users;

@ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
public gridView: unknown[];

public mySelection: string[] = [];

public ngOnInit(): void {
    this.gridView = this.gridData;
}

public onFilter(input: Event): void {
    const inputValue = (input.target as HTMLInputElement).value;
    console.log("onFilter ")

    this.gridView = process(this.gridData, {
        filter: {
            logic: "or",
            filters: [
                {
                    field: 'userName',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'email',
                    operator: 'contains',
                    value: inputValue
                },
                {
                    field: 'skills',
                    operator: 'contains',
                    value: inputValue
                }
            ]
        }
    }).data;

    this.dataBinding.skip = 0;
}

editUser(data : any){
console.log(data);
this.router.navigate(['admin/adminDash/editUser'], { state: { email: data.email } })
}


}
