<h1 align="center">ngu-mx-table</h1>
<p align="center"><i>ngu-mx-table</i> is a simple table to show the data in the matrix or grid format along with the form components.</p>

<p align="center"><b>Matrix/Grid data table</b><a href="#uttesh"><img src="https://github.com/uttesh/ngu-mx-table/blob/master/images/matrix_table.png" width="100%"/></a><a href="#uttesh"><img src="https://github.com/uttesh/ngu-mx-table/blob/master/images/dropShadow.png" width="100%"/></a></p><br/>

<p align="center"><b>Form component table</b><a href="#uttesh"><img src="https://github.com/uttesh/ngu-mx-table/blob/master/images/matrix_form.png" width="100%" height="80%"/></a><a href="#uttesh"><img src="https://github.com/uttesh/ngu-mx-table/blob/master/images/dropShadow.png" width="100%"/></a></p><br/>

## Installation
install library from npm
```
npm i ngu-mx-table
```

## How to use

1. Import the 'NguMatrixTableModule' in the app.module.ts

```
import { NguMatrixTableModule } from 'ngu-mx-table';

```
2. Add to NgModule import section
```
@NgModule({
	declarations: [],
	imports: [NguMatrixTableModule],
	providers: [],
	bootstrap: []
})
export class AppModule { }
```
3. Use the ngu-mx-table in the html or templat where ever required.

```
 <ngu-mx-table>
    <ngu-mx-th [headers]="headers"></ngu-mx-th>
    <ngu-mx-tr [data]="dataList" *ngFor="let row of dataList">
      <ngu-mx-td *ngFor="let data of row.values">
       // your component goes here
      </ngu-mx-td>
    </ngu-mx-tr>
  </ngu-mx-table>
```

## Components and attributes
| Compoenet    | Attributes |                                                                                   Comments |
| ------------ | :--------: | -----------------------------------------------------------------------------------------: |
| ngu-mx-table |            |                                                Its the table contains the child components |
| ngu-mx-th    |  headers   | Its the table header component and pass array od string which will the table header labels |
| ngu-mx-tr    |    data    |                                         Its the table row like traditional tr of the table |
| ngu-mx-td    |            |                Its the table data and in the body we can set any html component and render |


