# CSS Animations Showcase

This project demonstrates various CSS animations with an interactive showcase. Users can explore the animations and copy the code snippets to use in their own projects.

## Features
- Bounce Animation
- Rotate Animation
- Zoom-In Animation
- Fade-In Animation
- Code snippets with a "Copy to Clipboard" feature for each animation.

## File Structure

```
CSS-Animations-Showcase/
├── index.html        # Main HTML file
├── styles.css        # CSS styles and animations
├── script.js         # JavaScript functionality
└── README.md         # Project documentation
```

## Usage

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/your-repo/css-animations-showcase.git
```

### 2. Open in Browser
Navigate to the project folder and open `index.html` in any web browser.

### 3. Explore Animations
- Each animation has a preview section.
- Below the preview, click the **Copy Code** button to copy the corresponding CSS code snippet to your clipboard.

## Code Snippets
### Example: Bounce Animation
CSS for the Bounce Animation:
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

## Technologies Used
- **HTML**: Markup for the structure of the webpage.
- **CSS**: Styling and animations.
- **JavaScript**: Clipboard functionality for copying code snippets.

## How It Works
1. **HTML** defines the structure of the page and includes placeholders for animations and buttons.
2. **CSS** contains the animation definitions (e.g., keyframes) and styling.
3. **JavaScript** enables the "Copy to Clipboard" functionality for easy code sharing.

## Customization
- To add a new animation:
  1. Define the `@keyframes` in `styles.css`.
  2. Add a new card in `index.html` with the animation class applied.
- Update the preview box or image to showcase the animation.

## Browser Compatibility
This project is compatible with modern web browsers that support CSS animations and the Clipboard API.

## Future Enhancements
- Add more animations.
- Include a dark mode toggle.
- Add user customization options, such as animation speed.

## Contributing
Contributions are welcome! If you have suggestions for improvements, please submit an issue or create a pull request.

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

Enjoy exploring and reusing these animations in your own projects! 🚀

