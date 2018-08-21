import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMsgComponent } from './add-msg/add-msg.component';
import { LogComponent } from './log/log.component'
import { AppComponent } from './app.component'

const routes: Routes = [
	{
		path: 'log',
		component: LogComponent
	},
	{
		path: 'log/add',
		component: AddMsgComponent
	}, 
	{
		path: 'done',
		component: LogComponent
	}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
