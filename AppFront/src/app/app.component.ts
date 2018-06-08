import {Component, OnInit} from '@angular/core';
import {SailsService} from 'angular2-sails';
import {$WebSocket} from 'angular2-websocket/angular2-websocket';

declare var io;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private _sailsService: SailsService) {
  }

  ngOnInit(): void {
    // this._sailsService.connect("http://localhost:1337");


    const socket = io('http://localhost:3000');

    socket.on('connect', function () {
      console.log('Connected');
      socket.emit('otro', {test: 'test'});
    });
    socket.on('events', function (data) {
      console.log('event', data);
    });
    socket.on('exception', function (data) {
      console.log('event', data);
    });
    socket.on('disconnect', function () {
      console.log('Disconnected');
    });
    // this.listenConnect();
    // this._sailsService
    //   .get("http://localhost:1337/user")
    //   .subscribe(
    //     (d) => {
    //       console.log('Data', d)
    //     },
    //     (error) => {
    //       console.log('Error', error)
    //     }
    //   )
  }

  listenConnect() {
    this._sailsService
      .on("connect")
      .subscribe(
        (data) => {
          console.log('Data', data);
          this.listenUserEvents();
        },
        (error) => {
          console.log('Error', error)
        }
      )
  }

  listenUserEvents() {
    this._sailsService
      .on("user")
      .subscribe(
        (data) => {
          console.log('Data', data)
        },
        (error) => {
          console.log('Error', error)
        }
      )
  }
}
