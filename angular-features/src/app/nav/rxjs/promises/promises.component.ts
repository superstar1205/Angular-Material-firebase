import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss']
})
export class PromisesComponent implements OnInit {

  url = 'https://jsonplaceholder.typicode.com/todos/1';

  subscribeResult: Employee;
  promiseResult: Employee;
  asyncResult: Employee;

  conditionalPromiseResult: Employee;
  conditionalAsyncResult: Employee;

  additionPromiseResult: number;
  additionAsyncResult: number;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getValueWithPromise();
    this.getValueWithAsync();

    this.addWithPromise();
    this.addWithAsync();

    this.getDataUsingSubscribe();
    this.getDataUsingPromise();
    this.getAsyncData();

    this.getConditionalDataUsingPromise();
    this.getConditionalDataUsingAsync();
  }

  resolveAfterHalfSeconds(x: number) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 500);
    });
  }

  getValueWithPromise() {
    this.resolveAfterHalfSeconds(20).then(value => {
      console.log(`promise result: ${value}`);
    });
    console.log('I will not wait until promise is resolved');
  }

  async getValueWithAsync() {
    const value = <number>await this.resolveAfterHalfSeconds(20);
    console.log(`async result: ${value}`);
  }

  addWithPromise() {
    this.resolveAfterHalfSeconds(20).then(data1 => {
      const result1 = <number>data1;
      this.resolveAfterHalfSeconds(30).then(data2 => {
        const result2 = <number>data2;
        this.additionPromiseResult = result1 + result2;
        console.log(`promise result: ${this.additionPromiseResult}`);
      });
    });
  }

  async addWithAsync() {
    const result1 = <number>await this.resolveAfterHalfSeconds(20);
    const result2 = <number>await this.resolveAfterHalfSeconds(30);
    this.additionAsyncResult = result1 + result2;
    console.log(`async result: ${this.additionAsyncResult}`);
  }

  getDataUsingSubscribe() {
    this.httpClient.get<Employee>(this.url).subscribe(data => {
      this.subscribeResult = data;
      console.log('Subscribe executed.');
    });
    console.log('I will not wait until subscribe is executed..');
  }

  getDataUsingPromise() {
    this.httpClient
      .get<Employee>(this.url)
      .toPromise()
      .then(data => {
        this.promiseResult = data;
        console.log('Promise resolved.');
      });
    console.log('I will not wait until promise is resolved..');
  }

  async getAsyncData() {
    this.asyncResult = await this.httpClient
      .get<Employee>(this.url)
      .toPromise();
    console.log('No issues, I will wait until promise is resolved..');
  }

  getConditionalDataUsingPromise() {
    this.httpClient
      .get<Employee>(this.url)
      .toPromise()
      .then(result => {
        console.log('First Promise resolved.');
        if (result.id > 5) {
          const anotherUrl = 'https://jsonplaceholder.typicode.com/todos/1';
          this.httpClient
            .get<Employee>(anotherUrl)
            .toPromise()
            .then(data => {
              this.conditionalPromiseResult = data;
              console.log('Second Promise resolved.');
            });
        }
      });
  }

  async getConditionalDataUsingAsync() {
    const data = await this.httpClient.get<Employee>(this.url).toPromise();
    if (data.id > 5) {
      const anotherUrl = 'http://dummy.restapiexample.com/api/v1/employees';
      this.conditionalAsyncResult = await this.httpClient
        .get<Employee>(anotherUrl)
        .toPromise();
    }
    console.log('No issues, I will wait until promise is resolved..');
  }
}
