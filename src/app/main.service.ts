import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Livro } from './livro';
@Injectable()
export class MainService {

  constructor(private http: Http) { }

  getLivros(): Observable<Livro[]> {
    return this.http.get('./assets/acf.json')
    .map((resp: Response) => resp.json());
  }
}
