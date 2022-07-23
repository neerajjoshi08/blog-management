var express = require('express');
var router = express.Router();

// Using 'mysql2' package
var mysql = require('mysql2');

// Defining the database credentials
var con = mysql.createConnection({
  user: "root",
  password: "root",
  database: "blogdb",
  insecureAuth: true,
  multipleStatements: true
});

// Getting all the blogs
router.get('/getBlog', function (req, res, next) {
  const query = `SELECT * FROM BlogData ORDER BY blogId DESC`;
  con.query(query, (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

// For new blog
router.post('/postBlog', function (req, res, next) {
  // Defining the required parameters in order to check the undefined value
  const requiredParams = ['blogTitle', 'blogCategory', 'blogCreatedDate', 'blogModifiedDate', 'blogContent']
  
  // Getting the request body
  let blog = req.body;

  // For changing undefined to null for SQL flexibility  
  for (let param of requiredParams) {
    if (blog[param] === undefined) {
      blog[param] = null;
    }
  }

  // Inserting query
  const query = `INSERT INTO BlogData (blogTitle, blogCategory, blogCreatedDate, blogModifiedDate, blogContent)
                  VALUES( '${blog.blogTitle}', '${blog.blogCategory}', '${blog.blogCreatedDate}', '${blog.blogModifiedDate}', '${blog.blogContent}' )`;
  con.query(query, (err) => {
    if (err) throw err;
    res.json({ 'message': 'Successfully added.' });
  });
});

// For updating a blog
router.put('/editBlog', function (req, res, next) {
  const blog = req.body;
  // Updation query
  const query = `UPDATE BlogData SET 
            blogTitle = '${blog.blogTitle}',
            blogCategory = '${blog.blogCategory}',
            blogModifiedDate = '${blog.blogModifiedDate}',
            blogContent = '${blog.blogContent}'
            WHERE blogId = '${blog.blogId}'`;

  con.query(query, (err) => {
    if (err) throw err;
    res.json({ 'message': 'Blog successfully edited.' });
  });
});

// For deleting a blog
router.delete('/deleteBlog/:blogId', function (req, res, next) {

  // Getting the blogId from request parameter 
  const blogId = req.params.blogId;

  // Deletion query
  const query = `DELETE FROM BlogData WHERE blogId = ${blogId}`;

  con.query(query, (err) => {
    if (err) throw err;
    res.json({ 'message': 'Successfully deleted.' });
  });
});

module.exports = router;
