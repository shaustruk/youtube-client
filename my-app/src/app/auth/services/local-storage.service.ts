import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  getItem(key: string) {
    const item = localStorage.getItem(key);
    return (item) ? JSON.parse(item) : null;
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  clear() {
    localStorage.clear();
  }
}

