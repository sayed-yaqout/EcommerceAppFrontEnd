import { Component, OnInit } from '@angular/core';
import { profileData } from 'src/app/services/profile.service';
import{profile} from './profileData'
@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
profile=new profile("","");
  constructor(private profilData :profileData) { }

  ngOnInit(): void {
    this.profilData.getData().subscribe(
      (respond)=>{
        console.log(respond)
      },
      (error)=>{
        console.log(error)
      });
  }

}
