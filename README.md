# CSS Animations Showcase

This project is a web-based platform for showcasing CSS animations, allowing developers to preview animations and copy their code for use in their own projects. The project is built using HTML, CSS, and JavaScript.

---

## Features

- **Bounce Animation**: A simple up-and-down motion.
- **Rotate Animation**: A continuous 360-degree rotation.
- **Zoom-In Animation**: An image enlarging effect.
- **Fade-In Animation**: An image gradually appearing.
- **Copy Code Functionality**: Easily copy the CSS code for each animation.

---

## Demo

You can run this project locally by opening the `index.html` file in any modern web browser.

---

## How to Use

1. **View Animations**: The animations are displayed in the preview sections.
2. **Copy Code**: Click the "Copy Code" button below each animation to copy the corresponding CSS code.
3. **Use Code**: Paste the copied code into your own CSS files to integrate the animations into your projects.

---

## File Structure

```plaintext
.
├── index.html    # Main HTML file containing animations and styles
```

---

## Animations Included

### 1. Bounce Animation
```css
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.bounce {
  animation: bounce 1s infinite;
}
```

### 2. Rotate Animation
```css
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 2s linear infinite;
}
```

### 3. Zoom-In Animation
```css
@keyframes zoom-in {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
  }
}

.zoom-in {
  animation: zoom-in 3s infinite alternate;
}
```

### 4. Fade-In Animation
```css
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in {
  animation: fade-in 2s ease-in-out infinite alternate;
}
```

---

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and animations.
- **JavaScript**: Interactive copy-to-clipboard functionality.

---

## Setup Instructions

1. Clone or download the repository.
2. Open the `index.html` file in any modern web browser.

---

## Contributions

Feel free to fork this repository and create a pull request to suggest new animations or features.

---

## License

This project is licensed under the MIT License.

