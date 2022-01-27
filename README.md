# Assignment 0
## Up and Running with VSCode, GitHub Classroom, NPM, and much more

## Task
Write a basic HTML file that meets the minimum standards. In the process, you will get familiar with writing code in VSCode, using command line tools like **git**, **npm**, and **jest**.

## Setup
- clone this repository to your local machine
  `git clone http://.....`
- open the cloned folder in VSCode

## Requirements
Edit the content of ``index.html`` to meet the following standards

- **DOCTYPE** must be declared as "html"
- the rest of the document must be inside an **html** element, with the language set to "en"
- "charset" must be set to "utf-8" in the **head** element
- a title must be set in the **head** element
- the **body** must contain exactly 1 **level 1 heading** element
- you must have at least 1 **image** element
- all **image** elements must have "alt-text"
- you must have at least 1 **unordered list** 
- **unordered lists** must only have **list items** as direct children 

## Running the automated tests
There are a set of automatic tests in this project in the **tests** folder. 

**Do not edit these!!**

GitHub will automatically run the tests when you submit (push) your work, but you can (and should) run the tests yourself.

When you first **clone** the project to your computer, run the following command in the terminal (``CTRL+` `` to open) to install the required javascript libraries to run the tests:

``npm install``

Once that finishes, you can run the tests either using the command 

``npm run test``

or by installing the **Jest Test Explorer** VSCode extension which adds a **testing** tab to your sidebar.

If a test is failing, try reading through the error messages for hints on what to fix.

## Saving, Committing, and Submitting
At the end of every coding session (or better yet after completing any task), it's a good idea to **commit** your changes to **git** and **push** those commits to **GitHub**.

1. Make sure to save your files: ``CTRL+K -> S``
2. Stage all changes: ``git add .``
   - the ``.`` means "everything in this folder" if you want to just commit changes to specific files, use their filenames instead
3. Commit the staged changes: ``git commit -m "your commit message here"``
   - all commits must have a message and it's best if that message describes what the changes were.
4. Upload any new commits to the remote repository (AKA GitHub): ``git push``
   - pushing to GitHub not only backs up your work, but it also serves as our means of submitting your assignments. GitHub will automatically run the tests on your code every time you push new changes and your teacher will be able to quickly check the results.

If you work on multiple computers, it's a good idea to start every session with a ``git pull`` to make sure you're working with your most up-to-date code, and don't end up with any conflicting changes from trying to merge two divergent timelines.
