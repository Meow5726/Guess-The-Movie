# 🎬 Guess the Movie
A cinematic, interactive movie-guessing quiz built with HTML, CSS, and JavaScript. Test your movie knowledge by identifying films from clues about their plots, genres, release years, and categories. The game combines a dark visual theme, glassmorphism, animated gradients, and a looping video background to create an immersive experience.

## ✨ Features
- **Interactive quiz:** Answer nine movie-related questions.
- **Multiple-choice answers:** Choose from three options per question.
- **Movie clues:** Use plot descriptions, genres, release years, and categories.
- **Randomized options:** Answer choices are shuffled for every question.
- **Live score tracking:** Earn one point for every correct answer.
- **Instant feedback:** Correct answers appear green and incorrect selections appear red.
- **Win or lose screen:** Score at least 3 points to win.
- **Restart functionality:** Replay the quiz or reset your progress at any time.
- **Cinematic interface:** Glassmorphism, gradient typography, glowing buttons, and animations.
- **Responsive layout:** Adapted for desktop, tablet, and mobile screens.
- **Accessibility considerations:** Keyboard focus indicators and reduced-motion support.
- **Video background:** Optional looping background video for a cinematic atmosphere.

## 🛠️ Technology Stack
| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Styling, gradients, animations, and responsive layout |
| JavaScript (ES6+) | Quiz logic, randomized choices, scoring, and event handling |
| Google Fonts | Cormorant Garamond and Montserrat typography |
| MP4 video | Optional animated background |

No frontend framework, package manager, database, or external JavaScript library is required.

## 📁 Folder Structure
```text
guess-the-movie/
├── index.html
├── style.css
├── app.js
├── assets/
│   └── bg-video.mp4
└── README.md
```

### File descriptions
- `index.html` — Defines the welcome screen, instructions, score display, clues, answer buttons, and result screen.
- `style.css` — Controls the visual theme, glass effects, animations, button states, and responsive behavior.
- `app.js` — Stores the questions and manages answer selection, score updates, feedback, and game resets.
- `assets/bg-video.mp4` — Optional background video. Use this path for the video referenced in the HTML.
- `README.md` — Project documentation and setup guide.

## 🚀 Getting Started
### Prerequisites
You only need:
- A modern web browser.
- A code editor such as Visual Studio Code.
- The project files.

### Installation
1. Clone the repository or download the project files.
2. Open the project folder in your code editor.
3. Make sure `index.html`, `style.css`, and `app.js` are in the same directory.
4. Place your background video inside the `assets` folder and name it `bg-video.mp4`.

### Run locally
**Visual Studio Code Live Server**
1. Open the project folder in VS Code.
2. Install the Live Server extension if necessary.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## 🎨 Design Highlights
- Dark navy background with blue and purple gradients.
- Frosted-glass cards and translucent panels.
- Animated gradient headings and glowing effects.
- Responsive multiple-choice buttons.
- Cinematic vignette overlay and optional background video.
- Motion-reduction support for users who prefer fewer animations.

## 📌 Future Improvements
- Add more movies and difficulty levels.
- Include sound effects and background music with user controls.
- Add a question progress indicator.
- Introduce a timer for each question.
- Store high scores using local storage.
- Add movie posters and visual hints.
- Include category filters for Hollywood, Bollywood, anime, and other cinema.
- Improve keyboard navigation and screen-reader feedback.

## 📄 License
This project can be shared and modified according to the license you choose for your repository. If you intend to publish it publicly, consider adding an explicit license file.
---

**Made for movie lovers 🎬**
Guess smart, trust your clues, and enjoy the game!
