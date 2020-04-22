import {Component,OnInit, SystemJsNgModuleLoader} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cities: String[] = [    "Bangalore","Hyderabad","Mumbai","Delhi"
];
rooms: String[] = [    "Business","Economic","Single"
];
hotelList:any
RoomType:any
selectedCity:any
selectedroom:any
constructor(private http:HttpClient){
}

 onRoomType(ob) {
   this.selectedroom =ob.value;
   /* this.searchHotelByCityRoomType(this.selectedCity,selectedroom).subscribe(
     (data)=>{
      console.log('success',data);
     this.hotelList=data;
     },(err)=>console.log('err',err)
   ); */
  /* this.getbyroomType(selectedroom).subscribe(
    (data) =>{
      console.log('success',data);
      this.RoomType =data;
    },(err)=>console.log('err',err)
    
  ); */
} 

onCitiesChange(ob) {
  this.selectedCity = ob.value;
 /*  this.fetchHotelByCity(selectedCity).subscribe(
    (data)=>{
      this.hotelList=data;
    }
  ); */
}
search(){
  
 if(this.selectedroom){
    if(this.selectedCity){
    this.searchHotelByCityRoomType(this.selectedCity,this.selectedroom).subscribe(
      (data)=>{
       console.log('success',data);
      this.hotelList=data;
      },(err)=>console.log('err',err)
    );
  }
  }
  else if(this.selectedCity){
    if(this.selectedroom==null||this.selectedroom==''){
          this.fetchHotelByCity(this.selectedCity).subscribe(
      (data)=>{
        this.hotelList=data;
      }
    ); 
    }
  }
}
fetchHotelByCity(city:string){
  return this.http.get("http://localhost:8080/hotelsbycity/"+city);
}

getbyroomType(roomtype:string){
  return this.http.get("http://localhost:8080/rooms/"+roomtype);
}

searchHotelByCityRoomType(city:string,roomtype:string){
  return this.http.get("http://localhost:8080/hotelsbycity/"+city+"/"+roomtype);
}
}
