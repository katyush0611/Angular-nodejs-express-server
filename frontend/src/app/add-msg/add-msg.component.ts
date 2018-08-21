import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-msg',
  templateUrl: './add-msg.component.html',
  styleUrls: ['./add-msg.component.css']
})
export class AddMsgComponent implements OnInit {
	onSubmit(f: NgForm) {
		console.log(f.value);
		var now = new Date(Date.now());
		if (now.getMinutes() < 10) {
			var min = '0' + now.getMinutes();
		} else {var min = now.getMinutes()}
		if (now.getHours() < 10) {
			var hour = '0' + now.getHours();
		} else {var hour = now.getHours()}
		if (now.getMonth() < 10) {
			var mm = '0' + (now.getMonth() + 1)
		} else {var mm = now.getMonth() +1}
		var time = now.getDate() + '-' + mm + '-' + now.getFullYear() + ', at- ' + hour + ':' + min;
		this.http.post('http://localhost:3000/add',
		{
			"sender": f.value.sender,
			"body": f.value.body,
			"date": time
		})
		.subscribe(data => {
	      	// console.log(data);
	      	this.router.navigate(['/log']);
    });
	}
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
	
  }


}
