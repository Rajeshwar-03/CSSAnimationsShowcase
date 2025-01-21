function copyCode(elementId) {
    const code = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard!');
    }, () => {
      alert('Failed to copy code.');
    });
  }
  