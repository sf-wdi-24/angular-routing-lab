<!--
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Angular Book App

![Beauty and the Beast gif](https://camo.githubusercontent.com/be499bc7145dcf2442b7b0b2cff5558a2ab14b18/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6f465069506771776f663450652f67697068792e676966)
### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this training, developers will be able to:*

- set up an angular app.
- use `$http` to access a RESTful API.
- practice routing in Angular using `ngRoute`.


Deliberate practice is a really effective way to build skills. You've learned about a lot of key pieces of an Angular app, and now it's time to put those pieces together, again.  You'll be expected to be able to build an Angular app from scratch.

### Overview

In this lab, you'll be creating a simple library app to keep track of books.

When a user goes to `/`, they should see a list of all of the books in the API. When a user goes to `/books/:id`, they should see a single book. On the `/books/:id` page, a user should be able to edit or delete a book.

Your data (a list of books) is available at `https://super-crud.herokuapp.com/books`. You and your classmates will all be working with the shared API; keep that in mind as you make changes.  If there are no books left or far too many books, feel free to reset the database by clicking [the reset button](http://super-crud.herokuapp.com/reset). Don't do this without warning your classmates over Slack, though. They might be puzzled why their newly created book resources aren't appearing in the database.

### Expectations

Your finished product will:

  1. Route the user to an index page at `/`. That page will:
    * display all of the books.
    * show the image, title, author, and release date of each book.
    * include a link to the show book page on the title of each book.
  2. Route the use to a show book page at `/books/:id` for any existing book id. The show page will:
    * display all of the data about the specific book.
    * have a delete button that deletes the specific book from the database and, when successfully deleted, redirects the user to the home page.
    * have an edit button that reveals a form for the user to edit the attributes of the book.
    * The form will have a save button that sends the edits to the database and, when successfully updated, redirects the user to the home page.
    * have a cancel button that does not save any of the changes the user just made.

### This Repo's Structure

There are three branches in this repo that you might want to pay attention to: `master`and `solutions`.

The `master` branch has these instructions, with no starter code. As you start building, you'll want to reference your previous Angular projects to make sure you're setting up your app correctly.

The `solutions` branch has a fully built-out application that meets all the expectations above. Reference it if you're really stuck, but remember you may have your app set up differently!

**You can work directly from the `master` branch or create another branch for your work!**

### Getting Started

1. Fork and clone this repo.
2. Change directories into `angular-books-crud-lab`.
3. Start creating the files you need for your project! (`index.html` and `app.js` are safe bets to start.)
4. Install `budo`, which you'll use as your server for this project:`npm install -g budo`
5. Run `budo -P --host=localhost --open` from the Terminal (inside your project directory). This starts a simple server that by default will serve up your `index.html` on `/` and any route it doesn't recognize (like `/books`).  Note: Your `index.html` *must* be in your main project directory for this server setup.

### Tips

* Commit frequently!
* Once you add client-side routing,  Angular will need to be served from a server. Make sure you're running `budo`, and that the URL you're looking at starts with `localhost`, NOT `file://`.
* The books api is set up with RESTful routes, so follow RESTful routing conventions.  You can test endpoints with Postman or cURL, or by setting up a simple request to trigger them.
* Look at (`console.log`) the data you get back from each `$http` request!

### Hints

<details><summary>Click for a hint on what your directory structure should look like. (It's okay if it's not exactly like this, but this is a structure that makes a lot of sense.)</summary>
```
.
├── README.md
├── index.html  // IMPORTANT
├── public
│   ├── images
│   │   └── logo.jpg
│   ├── scripts
│   │   ├── app.js
│   │   └── controllers
│   │       ├── booksIndexController.js
│   │       └── booksShowController.js
│   └── styles
│       └── styles.css
└── templates
    ├── books-index.html
    └── books-show.html
```
</details>
<details><summary>Click for a hint on how to change the page url from within a controller. (You don't necessarily need to do this, depending on your solution.)</summary>
    Inject the [`$location`](https://docs.angularjs.org/api/ng/service/$location) service, and use its `path` method.

    * <details><summary>click for example</summary>  

      ```js  
      // inside GoatsShowController, we want to send the user back to goats index (home page) automatically
      $location.path('/');
      ```
      </details>

  </details>

<details><summary>Click for a hint on the format of template URLs when using local HTML files.</summary>
    Give the full file name: `/templates/goats-show.html`.
  </details>

### Stretch Challenges

2. **Allow the user to edit the book image:** allow the user to change the URL for the book image.
3. **Add filters to organize the books index page:** add a search bar to filter the books by your search, or buttons to sort them alphabetically by author name or book title.
