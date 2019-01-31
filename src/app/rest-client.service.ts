import { Injectable } from '@angular/core';
import { Agent } from './agent';
import { Bicycle } from './bicycle';
import { HttpClient } from '@angular/common/http';
import { BicycleCategory } from './bicycleCategory';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  private urlAge = 'http://localhost:8080/agents';
  private urlBic = 'http://localhost:8080/bicycles';
  private urlCat = 'http://localhost:8080/bicycleCategory';

  constructor(private http:HttpClient) { }

  public getAgents():Observable<Agent[]> {
    return this.http.get<Agent[]>(this.urlAge);
  }

  public getBicycles():Observable<Bicycle[]> {
    return this.http.get<Bicycle[]>(this.urlBic);
  }

  public getBicycleCategory():Observable<BicycleCategory[]> {
    return this.http.get<BicycleCategory[]>(this.urlCat);
  }


  public saveUser(user:Agent):Observable<boolean> {
    return this.http.post(this.urlAge, user).pipe(map( _ => true));
  }

  public deleteUser(user:Agent):Observable<boolean> {
    return this.http.delete(this.urlAge+'/'+user.id).pipe(map( _ => true));
  }
}
