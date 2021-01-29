import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Status {
  INFO = 'info',
  PROCESSING = 'processing',
  WARNING = 'warning',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum Duration {
  SHORT = 2500,
  LONG = 5000,
}

export class KkuNotification {
  public show = true;
  constructor(
    public message: string,
    public status: Status = Status.INFO,
    private _duration?: Duration
  ) {
    if (this._duration) {
      this.duration = _duration || 0;
    }
  }

  public set duration(duration: Duration) {
    this._duration = duration;
    setTimeout(() => {
      this.show = false;
    }, this._duration);
  }

  // Shorthand for convenience
  public update(
    message: string = this.message,
    status: Status = Status.SUCCESS,
    duration?: Duration
  ): void {
    this.message = message;
    this.status = status;
    duration && (this.duration = duration);
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

  // shorthand to create and push in one line
  //TODO: consider of all these shorthands are good practice
  public create(
    message: string,
    status: Status,
    duration?: Duration
  ): KkuNotification {
    const notification = new KkuNotification(message, status, duration);
    this.push(notification);
    return notification;
  }
}
