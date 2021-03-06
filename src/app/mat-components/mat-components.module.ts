import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatRadioModule, 
  MatSelectModule, 
  MatInputModule, 
  MatDatepickerModule, 
  MatNativeDateModule, 
  MatIconModule, 
  MatChipsModule, 
  MatProgressSpinnerModule, 
  MatTooltipModule, 
  MatTabsModule, 
  MatDialogModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule } 
  from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule, 
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class MatComponentsModule { }
