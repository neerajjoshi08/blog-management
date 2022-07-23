import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IBlogData } from './blog-data.service';

// Service class for consuming APIs running on express server.
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // Base url for express server
  baseURL: string = 'http://localhost:3000/api/blog/';

  constructor(private http: HttpClient) { }

  // Call for getting all the blogs
  getBlogs(): Observable<IBlogData[]> {
    return this.http.get<IBlogData[]>(this.baseURL + 'getBlog')
      .pipe(
        catchError(this.handleError)
      );
  }

  // Call for creating a new blog
  postBlog(blog: IBlogData): Observable<IBlogData> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(blog);
    return this.http.post<IBlogData>(this.baseURL + 'postBlog', body, { 'headers': headers })
      .pipe(tap(),
        catchError(this.handleError)
      );
  }

  // Call for editing an existing blog 
  editBlog(blog: IBlogData): Observable<IBlogData> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(blog);
    return this.http.put<IBlogData>(this.baseURL + 'editBlog', body, { 'headers': headers })
      .pipe(tap(),
        catchError(this.handleError)
      );
  }

  // Call for deleting an existing blog 
  deleteBlog(blogId: number): Observable<any> {
    return this.http.delete<IBlogData>(this.baseURL + `deleteBlog/${blogId}`)
      .pipe(tap(),
        catchError(this.handleError)
      );
  }

  // For handling the errors
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
