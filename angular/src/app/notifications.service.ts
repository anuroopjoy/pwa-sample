import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  addSubscription(sub: PushSubscription) {
    return lastValueFrom(
      this.http.post('http://localhost:3000/api/subscription', { sub })
    );
  }

  notifications(data: string) {
    return lastValueFrom(
      this.http.post('http://localhost:3000/api/notifications', { data })
    );
  }
}
