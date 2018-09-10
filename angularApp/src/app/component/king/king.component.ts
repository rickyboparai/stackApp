import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-king',
  templateUrl: './king.component.html',
  styleUrls: ['./king.component.css']
})
export class KingComponent implements OnInit {
  posts: any = [];
   constructor(private postsService: DataService) { }
  
    ngOnInit() {
      // Retrieve posts from the API
      this.postsService.data().subscribe(posts => this.updateArray(posts));
      
             
    }

    updateArray(posts){
         
         this.posts = posts.filter(function (el) {
          return el.hse !== "House of Wessex";
        });
        this.posts.sort((a, b) => a.nm.localeCompare(b.nm));

        for (var i = 0; i < this.posts.length; i++){
          this.posts[i].cty = this.posts[i].cty.replace('United Kingdom', 'UK');
          this.posts[i].nm = this.posts[i].nm.split(' ')[0].split('').reverse().join('');
         }


    }
}
 