import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'
import  {HttpService}  from '../http.service'
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  nameData : any = [{}];
  userList :  any = [];
  fromDate : Date = new Date();
  toDate : Date;

  constructor(private  dateFormat: DatePipe, private  service: HttpService, private toast : ToastrService) { }

  ngOnInit() {
    this.getUserList()
  }

  getUserList () {
    this.service.getData().subscribe((resp:any) => {
     this.userList = resp;
     this.userList.map(item => {
       item.data.booking_start_date = this.dateFormat.transform(item.data.booking_start_date, 'dd-MM-yyyy');
       item.data.booking_end_date = this.dateFormat.transform(item.data.booking_end_date, 'dd-MM-yyyy');
     })
    })
  }

  addnewUser () {
    this.nameData.push({})
  }

  deleteEntries (id) {
    this.service.deleteData(id).subscribe((resp: any) => {
      this.toast.error('Entry Deleted')
      this.getUserList();
    })
  }

  deleteRow  (array, index) {
    array.splice(index, 1)
    if(array.length === 0) array.push({}); 
  }

  saveRecords () {
    let postobj   : any = {};
    let users = [];
    let  details :  any = {};
    this.nameData.map(item => {
      users.push(item)
    })
    details.booking_start_date = this.dateFormat.transform(this.fromDate,  'yyyy-MM-dd');
    details.booking_end_date = this.dateFormat.transform(this.toDate,  'yyyy-MM-dd');
    details.users = users;
    postobj.data = details;
    this.service.postData(postobj).subscribe(resp => {
      this.toast.success('User Details Saved Successfully')   
    this.nameData = [{}];
    this.toDate = null;
    this.fromDate = new Date();
    this.getUserList();
    })
  }

}
