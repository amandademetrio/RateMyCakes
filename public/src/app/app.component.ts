import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rate My Cakes';
  cakes = [];
  newCake = {};
  newRating = {}
  selectedTask;
  constructor(private _httpService: HttpService){
    this.getCakes();
  }

  ngOnInit(): void {
    this.newCake = {'name': '','baker':'','image':''}
    this.newRating = {'comment':'','rating': 5}
  }

  getCakes() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      this.cakes = data['cakes']
    })
  }

  onSubmitCake(cake) {
    let observable = this._httpService.createCake(cake);
    observable.subscribe(data => {
      console.log("got data from post back ",data)
      this.newCake = {'name': '','baker':'','image':''}
      this.getCakes();
    })
  }

  onSubmitRating(newRating,cake) {
    let observable = this._httpService.createComment(newRating,cake);
    observable.subscribe(data => {
      console.log("got data from post back",data)
      this.newRating = {'comment':'','rating': 5}
      this.getCakes();
    })
  }

  taskToShow(cake) {
    this.selectedTask = cake;
  }

  showRate(cake) {
    cake.showRatingBox = true;
  }
}
