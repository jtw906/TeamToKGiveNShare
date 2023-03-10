# README

## Introduction

Our project is called Give n’ Share, a mobile app whose main goal is to reduce waste and promote sustainability habits by providing a platform for users to give and share things they do not use or need anymore, or if they simply want to give back to their local communities. This is accomplished through the main functionality of the app, which is allowing users to create and upload posts of items they would like to give away. These posts are displayed on an interactive map, in which other users can view for potential items they would like. After an item is posted onto the map, another user can reserve the item, and be given directions to the poster’s pickup location.

## Requirements

This code has been run and tested on:

- Flask - 2.2.3
- MongoDB - 6.0
- Python - 3.11.2
- React - 18.2.0
- React Native - 0.71.3


## External Deps

- Flask - Download latest version at https://pypi.org/project/Flask/
- MongoDB - Download latest version at https://www.mongodb.com/download-center/enterprise/releases
- Python - Download latest version at https://www.python.org/downloads/
- React - Download latest version at https://reactjs.org/
- React Native - Download latest version at https://reactnative.dev/
- Git - Downloat latest version at https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
- GitHub Desktop (Not needed, but HELPFUL) at https://desktop.github.com/

## Installation

Download this code repository by using git:

`git clone https://github.com/SP23-CSCE482/Team-ToK-Give-n-Share-.git`

## Tests

There are no tests implemented at this time.

## Execute Code

Run the following code on a Flask server
`cd backend`

Run the app
`flask run`


OR


Run the following code on a React Native server
`cd givenshare`

Run the app
`expo start`
then scan the QR with your mobile device

Running the web application will be implemented soon.
The (soon-to-be) application can be seen using a browser and navigating to http://localhost:3000/


## Environmental Variables/Files

We have environment variables setup for password which are binary hash. The MongoDB will handle authentication. The link to their password validation aspect is https://www.mongodb.com/community/forums/t/user-password-validation/9692

The tutorial above will help you understand how we encrypted the account's passwords.


## Deployment

1. For this assignment you should work with your github repository environment_test.
2. (Start your docker and work in your terminal) Make sure you have dev, test and main branches. However, since we’re not really going to develop any new features, we won’t be using the dev branch in the assignment. We’ll be using test and main branches.
   First, use $ git status to see if your git is tracking the current dir.
   If you haven’t created dev and test branches, please do it now. For example, commands to create a test branch with git:

Note:
$ git checkout -b <branch> will create and switch to the new branch
$ git checkout <branch> will only switch to the branch
You don’t need to create a new branch in Github in advance, because $ git push origin <branch> will do it for you if Github doesn’t have a corresponding branch.

After you create all three branches, your Github should look like this:

3. Switch to the test branch. Command - $ git checkout test

4. Save the changes and push it to repository
   $ git add .
   $ git commit -m “some comment”
   $ git push origin test

5. Next, go to the Github website. Create a pull request and merge the changes from test to main

6. After the merge, Github Actions should automatically deploy the app.

## CI/CD

CI/CD has been implemented in the GitHub Actions in the repo here -> https://github.com/SP23-CSCE482/Team-ToK-Give-n-Share-/actions

## Support

The support of this app is currently being development.

## Extra Helps

Please contact the group for any other help.
Alex Moree - alex_moree@tamu.edu
Jack Warham - jtw906@tamu.edu
Hanbit Kang - hk24536@tamu.edu
Sang Heon Lee - sheonlee98@tamu.edu
Yusuf Barati - yusufb@tamu.edu
