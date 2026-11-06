# taste_of_africa_website_project
# Tastes of Africa

This is a  multi-page website celebrating African food heritage, built with HTML5, CSS and JavaScript.

## Pages

| Page | File |
|---|---|
| Home | `index.html` |
| Recipes (with region filter) | `recipes.html` |
| Recipe: Isombe (Rwanda) | `isombe.html` |
| Recipe: Chicken Suya (Nigeria) | `chicken-suya.html` |
| Recipe: Injera (Ethiopia) | `injera.html` |
| Recipe: Lamb Tagine (Morocco) | `lamb-tagine.html` |
| Region: West Africa | `west-africa.html` |
| Region: East Africa | `east-africa.html` |
| Region: North Africa | `north-africa.html` |
| About Us | `about.html` |
| Contact | `contact.html` |

## Features

**HTML**
- Semantic HTML5: `header`, `nav`, `main`, `article`, `section`, `figure` and `figcaption`, `footer`
- Expandable cooking steps with `details` and `summary`
- Embedded YouTube videos and Google Maps
- Nutrition tables, labelled form fields, and `mark` for key ingredients

**CSS**
- Palette taken from the hero photo: charcoal wood, stew orange, plantain green and lime
- Google Fonts: Young Serif for headings, Karla for body text
- Responsive layout using `rem`, `%`, `vw` and CSS Grid
- Light and dark themes

**JavaScript (`script.js`)**
- Recipe filter by region, using `data-region` attributes
- Favorite button that saves recipe IDs in `localStorage` and restores them on reload
- Ingredient scaler: change the servings and the amounts update
- Dark / light mode toggle that is remembered
- Contact form validation: the message must be longer than 20 characters, then a personalised thank-you replaces the form
- Newsletter signup in the footer

## Run it locally

Browsers block embedded YouTube videos on pages opened as files, so use a local server.

1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.

Or, from a terminal in the project folder: `python -m http.server 8000`, then open `http://localhost:8000`.

## Adding your media

**YouTube videos.** Open the video, click **Share**, then **Embed**, and copy the code. Paste it in place of the placeholder `<iframe>` in each page. Search the project for `YOUR_` to find all 8 spots.

**Dish photos.** Put these in the `images/` folder:
- `isombe.jpg`
- `injera.jpg`
- `tagine.jpg`

`hero.jpg` (home page background) and `suya.jpg` are already included. Until a photo is added, its card shows a striped placeholder.

## Project structure

```
taste_of_africa_website_project/
├── index.html
├── recipes.html
├── isombe.html, chicken-suya.html, injera.html, lamb-tagine.html
├── west-africa.html, east-africa.html, north-africa.html
├── about.html
├── contact.html
├── styles.css
├── script.js
└── images/
```

