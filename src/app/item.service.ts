import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from './item';
import { ITEMS } from './mock-items';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsURL = 'api/items';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private messageService: MessageService,
              private http: HttpClient) { }

  /* CRUD - CREATE */
  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsURL, item, this.httpOptions)
            .pipe(
              tap((newItem: Item) => this.log(`ItemService: Added item of Id ${newItem.id}`)),
              catchError(this.handleError<Item>(`addItem`))
            )
  }

  /* CRUD - READ */
  getItems(): Observable<Item[]> {  // Get items from the remote server
    return this.http.get<Item[]>(this.itemsURL)
            .pipe(
                tap(_ => this.log(`ItemService: Fetched items`)),
                catchError(this.handleError<Item[]>('getItems', []))
            );
   }

  getItem(id: number): Observable<Item> {
    const itemURLById = `${this.itemsURL}/${id}`;
    return this.http.get<Item>(itemURLById)
            .pipe(
                tap(_ => this.log(`ItemService: Fetched item of Id ${id}`)),
                catchError(this.handleError<Item>(`getItem id=${id}`))
            );
 }

 /* CRUD - UPDATE */
  updateItem(item: Item): Observable<any> {
    return this.http.put(this.itemsURL, item, this.httpOptions)
            .pipe(
                tap(_ => this.log(`ItemService: Updated item of Id ${item.id}`)),
                catchError(this.handleError<any>(`updateItem id=${item.id}`))
    )
  }

 /**
 * Error handling function that handles Http operation that failed and let the app continue.
 * It takes a type param so it can return the safe value as the type that the app expects.
 *
 * @param operation - name of the http operation that failed
 * @param result - optional value to return as the observable result
 */
 private handleError<T>(operation='operation', result?: T) {
   return (error: any): Observable<T> => {
     console.error(error);
     this.log(`ItemService: ${operation} failed: ${error.message}`);
     return of(result as T);
   }
 }

 private log(message: string): void {
   this.messageService.add(message);
 }
}
