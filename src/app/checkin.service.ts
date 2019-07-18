import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  checkinUrl = 'http://localhost:8080/checkins';

  constructor(private http: HttpClient) { }

  incluir(checkin: any){
    return this.http.post(this.checkinUrl, checkin);
  }

  listarNoHotel(){
    return this.http.get(`${this.checkinUrl}/noHotel`);
  }

  listarForaHotel(){
    return this.http.get(`${this.checkinUrl}/foraHotel`);
  }
}
