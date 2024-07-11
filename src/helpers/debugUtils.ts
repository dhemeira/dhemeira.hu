/**
 * On Tab key press prints the focused element to the console
 */
export function logActiveElement() {
  (document.querySelector('body') as HTMLBodyElement).addEventListener('keydown', function (event) {
    if (event.keyCode == 9) {
      setTimeout(() => {
        console.log('active element:', document.activeElement);
      }, 300);
    }
  });
}
