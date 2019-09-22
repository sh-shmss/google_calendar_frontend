import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {

  public results;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
     this.MyFunction();
  }

  MyFunction() {
    this.httpClient.get('http://localhost:5000').subscribe(data => {
      this.results = data as JSON
    },
      err => console.error(err),
      () => console.log(this.results),
    )
  }

}
