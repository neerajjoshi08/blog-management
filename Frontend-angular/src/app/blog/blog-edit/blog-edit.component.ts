import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlogData } from '../blog-data.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  blog: IBlogData = {} as IBlogData;

  constructor(private router: Router, private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      // Getting the blogId from the passed query parameters
      this.blog = JSON.parse(params['blog']);
    });
  }

  // When 'submit/success' button clicked
  onSubmit(): void {
    // Getting the current data
    const currentDate = new Date();
    this.blog.blogModifiedDate = currentDate.toLocaleDateString();

    // Invoking the edit blog service
    this.blogService.editBlog(this.blog).subscribe({
      next: res => {
        alert('Blog successfully edited!');

        // Navigating to main 'list of blog' component
        this.router.navigate(['blog']);
      },
      error: err => console.error(err)
    });

  }

  // When 'cancel' button clicked
  onCancel(): void {
    this.router.navigate(['blog'])
  }

}
