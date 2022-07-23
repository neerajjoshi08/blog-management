import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-delete',
  templateUrl: './blog-delete.component.html',
  styleUrls: ['./blog-delete.component.css']
})
export class BlogDeleteComponent implements OnInit {
  blogId!: number;

  constructor(private router: Router, private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Getting the blogId from the passed query parameters
      this.blogId = JSON.parse(params['blogId']);

      // Invoking the delete blog service
      this.blogService.deleteBlog(this.blogId).subscribe({
        next: res => {
          alert('Blog successfully deleted!');

          // Navigating to main 'list of blog' component
          this.router.navigate(['blog']);
        },
        error: err => console.error(err)
      })
    });
  }
}
