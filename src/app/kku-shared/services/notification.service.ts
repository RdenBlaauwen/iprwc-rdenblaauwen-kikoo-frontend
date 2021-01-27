import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum KkuNotificationStatus {
  INFO = 'info',
  PROCESSING = 'processing',
  WARNING = 'warning',
  SUCCESS = 'success',
  ERROR = 'error',
}

export class KkuNotification {
  public show = true;
  constructor(
    public message: string,
    public status: KkuNotificationStatus = KkuNotificationStatus.INFO,
    private _duration?: number
  ) {
    if (this._duration) {
      this.duration = _duration || 0;
    }
  }

  public set duration(milliseconds: number) {
    this._duration = milliseconds;
    setTimeout(() => {
      this.show = false;
    }, milliseconds);
  }
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  public notifications: BehaviorSubject<
    KkuNotification[]
  > = new BehaviorSubject<KkuNotification[]>([]);

  public push(notification: KkuNotification): void {
    const notifications = this.notifications.value;
    notifications.push(notification);
    this.notifications.next(notifications);
  }
}
