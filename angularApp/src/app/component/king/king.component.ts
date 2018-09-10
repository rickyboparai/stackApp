import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-king',
  templateUrl: './king.component.html',
  styleUrls: ['./king.component.css']
})

//class
export class KingComponent implements OnInit {

  //class properties
  posts: any = [];
   constructor(private postsService: DataService) { }
  
    ngOnInit() {
      // Retrieve data from data service
      this.postsService.data().subscribe(posts => this.updateArray(posts));
      
             
    }

    //class method
    updateArray(posts){
         
      //filter houses
         this.posts = posts.filter(function (el) {
          return el.hse !== "House of Wessex";
        });

        //arrange alphabetically
        this.posts.sort((a, b) => a.nm.localeCompare(b.nm));

        //acronym for city and reverse first name
        for (var i = 0; i < this.posts.length; i++){
          this.posts[i].cty = this.posts[i].cty.replace('United Kingdom', 'UK');
          this.posts[i].nm = this.posts[i].nm.split(' ')[0].split('').reverse().join('');
         }


    }
}
 