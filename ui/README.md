# Warung Play

<img src='./public//logo.png' />

Warung Play is <a href='https://www.tokopedia.com/play/channels'>Tokopedia Play</a> Clone. Warung Play is a website to sell <a href='https://www.tokopedia.com/'>Tokopedia</a> Products with <a href='https://www.youtube.com/'>YouTube </a> Video.

## Table of Contents

- [Warung Play](#warung-play)
- [Table of Contents](#table-of-contents)
- [How to Run](#how-to-run)
- [Features](#features)
- [Bonus Features](#bonus-features)
- [Pages](#pages)

## How to Run

1. Clone this repository.
2. Navigate to the project directory using the terminal.
3. Install the required dependencies by running:

   ```
   npm install
   ```

4. Create .env file:

   ```
   cp .env.example .env
   ```

5. Run the app:

   ```
   npm start
   ```

6. App running at:

   ```
   http://localhost:3000
   ```

## Features

1. Multi-page Navigation
   - Home Page: Display a list of videos
   - Video Detail Page: Display video detail, all products related to the video, and all comments from the video
2. Search
   - Users can search videos that contain specific product
3. Authentication
   - Users can register, login, and logout
   - Username and profile color (used as profile picture) displayed on the top right (header)
4. Comment
   - Users can create a new comment for a specific video
   - Users must log in to create a comment

## Bonus Features

1. Search
   - Users can search videos that contain specific product
2. Authentication
   - Users can register, login, and logout
   - Username and profile color (used as profile picture) displayed on the top right (header)

## Pages

- `/`: Home Page
- `/video/:videoId`: Video Detail Page

## Deployment

[https://warung-play.vercel.app/](https://warung-play.vercel.app/)
