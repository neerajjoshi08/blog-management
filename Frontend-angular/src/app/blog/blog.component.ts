import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBlogData } from './blog-data.service';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  pageTitle: string = "List of Blogs";
  index: number = 0;

  listOfBlogs: IBlogData[] = []

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe({
      next: listOfBlogs => {
        this.listOfBlogs = listOfBlogs;
      },
      error: err => console.error(err)
    });
  }

  // Navigating to component responsible for creating a new blog
  newBlog(): void {
    this.router.navigate(['./blog/new']);
  }

  // Navigating to component responsible for editing a new blog
  editBlog(blog: IBlogData): void {
    this.router.navigate(['./blog/edit'], {
      queryParams: { blog: JSON.stringify(blog) }
    });
  }

  // Navigating to component responsible for deleting a new blog
  deleteBlog(blog: IBlogData): void {
    this.router.navigate(['./blog/delete'], {
      queryParams: { blogId: blog.blogId }
    });
  }
}
