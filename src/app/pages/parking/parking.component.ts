import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ParkingServiceService } from '../../service/parking.service';
import { Parking } from '../../class/objects';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-parking',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css'
})
export class ParkingComponent implements OnInit {

  parking!: Parking[];
  total = 0;

  constructor(private parkingService: ParkingServiceService){}
  ngOnInit(): void {
    this.getParkingLotList(1, 10);
  }

  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent!: PageEvent;

  private getParkingLotList(pageNum: number, pageSize: number) {
    this.parkingService.getParkingLotList(pageNum, pageSize).subscribe((res:any) => {
      this.parking = res.data.list;
      this.total = res.data.total;
    });
  }

  handlePageEvent(pageEvent: PageEvent) {
    this.getParkingLotList(pageEvent.pageIndex + 1, pageEvent.pageSize); 
  }

 


}
