//your JS code here. If required.
function removeSelectedColor() {
  const select = document.getElementById('colorSelect');
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}
