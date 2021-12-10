import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

interface RoomModel {
  roomNumber: number,
  roomName: string
}

@Component({
  selector: 'app-magic',
  templateUrl: './magic.component.html',
  styleUrls: ['./magic.component.scss']
})
export class MagicComponent implements OnInit {
  private hotelRoomNumbers: RoomModel[] = [...Array(30).keys()].map((num: number)=> {
    return {
      roomNumber: num,
      roomName: `Room ${num}`
    }
  });


  constructor() { }

  ngOnInit(): void {
    console.log(this.hotelRoomNumbers)
  }

  public selectRoomNumbers() {
    console.log(this.hotelRoomNumbers.filter((room)=> room.roomNumber !== 13));
  }

  public selectRoomNames() {
    console.log(this.hotelRoomNumbers.filter((room)=> room.roomName !== "Room 13"));
  }
}
