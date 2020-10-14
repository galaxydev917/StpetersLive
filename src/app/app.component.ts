import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';

import { strings } from './config/strings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public signout = strings.ST8;

  public appPages = [
    {
      title: 'Online Service',
      url: '/live-watch',
      icon: './assets/menu_icon/youtube.svg'
    },
    {
      title: 'Donation',
      url: '/choose-amount',
      icon: './assets/menu_icon/payment.svg'
    },
    {
      title: 'The Weekly',
      url: '/weekly',
      icon: './assets/menu_icon/newspaper.svg'
    },
    {
      title: 'Blog/News',
      url: '/blog-news',
      icon: './assets/menu_icon/newspaper.svg'
    },   
    {
      title: 'Register',
      url: '/register',
      icon: './assets/menu_icon/clipboard.svg'
    },   
    {
      title: 'Find us',
      url: '/find-us',
      icon: './assets/menu_icon/placeholder.svg'
    },       
  ];

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public authService: AuthService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then( async () => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }


}
