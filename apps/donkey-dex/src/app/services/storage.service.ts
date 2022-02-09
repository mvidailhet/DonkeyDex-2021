import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  storeData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string) {
    return localStorage.getItem(key);
  }
}
