import { Component } from '@angular/core';
import {
  faUserCircle,
  faBox,
  faCog,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/kku-shared/services/auth.service';

@Component({
  selector: 'kku-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.scss'],
})
export class UserWidgetComponent {
  public faUserCircle = faUserCircle;
  public faBox = faBox;
  public faCog = faCog;
  public faSignOutAlt = faSignOutAlt;

  public open = false;
  public username = '';

  public get loggedIn(): boolean {
    return this.service.isAuthenticated;
  }

  constructor(private service: AuthService) {
    this.service.resourceOwner.subscribe((user) => {
      if (!user) {
        return;
      }
      this.username = user.username;
    });
  }

  public onToggle(): void {
    this.open = !this.open;
  }

  public onLogout(): void {
    this.service.logout();
  }
}
