import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() taskToShow: any;

  constructor() { }

  ngOnInit() {
    this.getAverageRating(this.taskToShow);
  }

  getAverageRating(taskToShow) {
    console.log("ran average rating function")
    var sum = 0;
    var count = taskToShow.ratings.length;
    for (let x in taskToShow.ratings) {
      sum += taskToShow.ratings[x].rating;
    }
    taskToShow.average_rating = sum/count
  }

  ngOnChanges(): void {
    this.getAverageRating(this.taskToShow);
  }


}
