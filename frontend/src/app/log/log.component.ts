import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  msgs = [];
      
  onClick(id) {
    for (var i = 0; i < this.msgs.length; i++) {
      var a = this.msgs[i]['_id'];
      if (a === id) {
        this.msgs.splice(i, 1)
      }
    }
    this.http.get('http://localhost:3000/delete/'+id)
    .subscribe(() => {
      console.log('deleted')
    })
  }
  
  constructor(private http: HttpClient, private router: Router){ }
  	
  ngOnInit(): void {
    this.http.get('http://localhost:3000/log').subscribe(data => {
      console.log(data);
      this.msgs = data
    });
  }
}
