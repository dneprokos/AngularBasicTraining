import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EditCourseComponent } from 'src/app/edit-course/edit-course.component';

export interface IPlayer {
  id: number;
  fullname: string;
  position: string;
  club: string;
  marketvalue: number;
  clubwebsite: string;
}

const PLAYER_DATA: IPlayer[] = [
    {id: 1, fullname: 'Kylian Mbappé', position: 'Right Winger', club: 'Paris Saint-Germain', marketvalue: 200.00, clubwebsite: 'https://en.psg.fr/'},
    {id: 2, fullname: 'Neymar', position: 'Left Winger', club: 'Paris Saint-Germain', marketvalue: 180.00, clubwebsite: 'https://en.psg.fr/'},
    {id: 3, fullname: 'Lionel Messi', position: 'Right Winger', club: 'Barcelona', marketvalue: 160.00, clubwebsite: 'https://www.fcbarcelona.com/en/'},
    {id: 4, fullname: 'Eden Hazard', position: 'Left Winger', club: 'Chelsea', marketvalue: 150.00, clubwebsite: 'https://www.chelseafc.com/en'},
    {id: 5, fullname: 'Kevin De Bruyne', position: 'Attacking Midfield', club: 'Manchester City', marketvalue: 150.00, clubwebsite: 'https://www.mancity.com/'},
    {id: 6, fullname: 'Harry Kane', position: 'Centre Forward', club: 'Tottenham Hotspur', marketvalue: 150.00, clubwebsite: 'https://www.tottenhamhotspur.com/'}
]

@Component({
  selector: 'app-angular-meterial',
  templateUrl: './angular-meterial.component.html',
  styleUrls: ['./angular-meterial.component.css']
})
export class AngularMeterialComponent implements OnInit {
  progress = 0;
  timer;
  
  isAscending: boolean = false;

  constructor(private dialog: MatDialog){
    this.timer = setInterval(() =>{
      this.progress++;
      if (this.progress === 100){
        clearInterval(this.timer);
      }
    }, 20)
  }

  displayedColumns: string[] = ['fullname', 'position', 'club', 'marketvalue'];
  dataSource = new MatTableDataSource<IPlayer>(this.sortPlayersMarketValue(this.isAscending));

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    
  }

  isCheckboxChecked = true;
  isRadioButtonChecked = true;
  colors = [
    {id: 1, name: 'Red' },
    {id: 2, name: 'Yellow' },
    {id: 3, name: 'Greed' }
  ];

  minDate = new Date(2018, 0, 1);
  maxDate = new Date(2018, 8, 1);

  categories = [
    {name: 'Beginner', isSelected: false},
    {name: 'Intermediate', isSelected: false},
    {name: 'Advanced', isSelected: false}
  ]

  
  onChange($event){
    this.isCheckboxChecked = !this.isCheckboxChecked;
    console.log($event);
  }

  onCategoryClick(category){
    this.categories
    .filter(c => c.name === category.name)
    .forEach(c =>c['isSelected'] = !category.isSelected);    
  }

  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data: { courseId: 1 }
    })
    .afterClosed()
    .subscribe(result => console.log(result));
  }

  sortPlayersMarketValue(isAscending: boolean){
     let ascSort = PLAYER_DATA.sort((a, b) => a.marketvalue - b.marketvalue);

     if (isAscending === true){
        return ascSort; 
     }
     else{
        return ascSort.reverse();     
     }   
  }

  updateDataSource(isAscending: boolean){
    this.dataSource = new MatTableDataSource<IPlayer>(this.sortPlayersMarketValue(isAscending));
    this.dataSource.paginator = this.paginator;
    this.isAscending = isAscending;
  }

  

}
