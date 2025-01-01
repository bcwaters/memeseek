# MemeSeek
Seemless meme template delivery.

Meme templates serve as a neutral foundation to convey ones idealogy in a digestable manner
## Installation
From the root directory install the packages with the command `pnpm install`

run the app with `npm run dev`

confirm the app is running in the browser [localhost:3000](http://localhost:3000)

### TODOS
 - decide on image directory design pattern and implement it
  Make it modular enough to migrate from file system to S3\
  `current pattern: templates/memename/variation.jpg 
                ex templates/yeschad/yesChadOriginal.jpg`


 - Catalog image files with useful metadata to enhance content delivery to users
  add a feature to directly post to social media from editor\ 
 ` current pattern: A JSON is loaded from the file system. this should be migrated to a database and processed by an ORM`

- write Drizzle calls for catalog api

- HUGE TASK migrate backend to  Nestjs once the backend api has outside users

- finish documentation of api in swagger

- remove annotations ignore typescript and fix errors

- set up upload component

- Find efficient way to source quality meme template images

- Make decision on image hosting/serving.  All images should have a reduced size for the catalog thumbnails

- Update favicon, logo, and all things branding related

- create post calls for uploading templates

- Set up environment variables to set log levels in project

- set up user login

- set up crytpo wallet donation page/banner

- consider token integration

- OPEN SOURCE CONTRIBUTION OPPPORTUITY: next-swagger-doc current version incompatible, rolled back to 0.4.0

### Random notes
Decide on userbase interactions: template editor, template upload, user statistics(scoreboard), user profile(links to social media)