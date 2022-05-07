import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Trip } from 'src/Models/Trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  //private baseUrl = '/SpringMVC/api/trip';
  baseUrl:string='/api/SpringMVC/api/trip';
 // private apiServerUrl=environment.apiBaseUrl;
 httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  }
  list: any = [];
  public formData !: FormGroup;
  constructor(private http: HttpClient) { }


  getData(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  
  createData(trip: Trip): Observable<Trip> {
    //return this.http.post<Trip>(`${this.baseUrl}`, trip);
    return this.http.post<Trip>(this.baseUrl, trip,
    this.httpOptions);
  }

  updatedata(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
}
