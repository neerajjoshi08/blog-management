import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBlogData } from '../blog-data.service';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent implements OnInit {
  blog: IBlogData = {} as IBlogData;

  constructor(private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
    // Getting the current data
    const currentDate = new Date();

    // Setting the fields 
    this.blog.blogCreatedDate = currentDate.toLocaleDateString();
    this.blog.blogModifiedDate = currentDate.toLocaleDateString();
  }

  // When 'submit/success' button clicked
  onSubmit(): void {
    this.blogService.postBlog(this.blog).subscribe({
      next: res => {
        alert('Blog successfully added!');

        // Navigating to main 'list of blog' component
        this.router.navigate(['blog']);
      },
      error: err => console.error(err)
    });
  }

  // When 'cancel' button clicked
  onCancel(): void {
    this.router.navigate(['blog']);
  }
}
