import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private isClient(): boolean {
    return (
      typeof window !== 'undefined' &&
      typeof window.sessionStorage !== 'undefined'
    );
  }

  setItem(key: string, value: string | null): void {
    if (this.isClient()) {
      sessionStorage.setItem(key, value ?? '');
    }
  }

  getItem(key: string): string | null {
    if (this.isClient()) {
      return sessionStorage.getItem(key);
    }
    return null;
  }

  removeItem(key: string): void {
    if (this.isClient()) {
      sessionStorage.removeItem(key);
    }
  }
}
