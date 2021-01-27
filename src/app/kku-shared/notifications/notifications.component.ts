import { Component } from '@angular/core';
import {
  KkuNotification,
  KkuNotificationStatus,
  NotificationService,
} from '../services/notification.service';

@Component({
  selector: 'kku-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent {
  public notifications: KkuNotification[] = [];
  constructor(private notificationService: NotificationService) {
    notificationService.notifications.subscribe((notifications) => {
      this.notifications = notifications;
    });
  }
}
