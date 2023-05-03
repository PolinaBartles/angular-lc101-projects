import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Famous movies';
  image1 = 'https://www.shutterstock.com/image-vector/target-arrow-business-success-concept-600w-718547542.jpg';
  image2 = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS2miO44RELcPmXtxFyc6rL15AG4fILAu1Zjlp5amZLZN-7gxAN';
  image3 = 'https://m.media-amazon.com/images/M/MV5BYjUyZWZkM2UtMzYxYy00ZmQ3LWFmZTQtOGE2YjBkNjA3YWZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg';

  constructor() { }

  ngOnInit() {
  }

}
