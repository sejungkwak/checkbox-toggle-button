# Good, Cheap, Fast Checkboxes

![screen recording](https://media.giphy.com/media/js538dr10k7eJRYXqv/giphy.gif)

#### project notes

1. HTML

- h: How do you want your project to be?
- 3 chckbox + span(toggle buttons) + Good / Cheap / Fast (max choosable option is 2)

2. CSS

- toggle button

3. JavaScript

- max choosable option is 2: click event listener

- Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML

```
div
  input:checkbox
  label
    div(for the slider)
  span(for the text)
```

2. CSS

- animation, scale(1.2) at 50%

3. JavaScript

- change event listener

```
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
  if ( good.checked && cheap.checked && fast.checked ) {
    if ( good === theClickedOne ) {
      fast.checked = false;
    }
    if ( cheap === theClickedOne ) {
      good.checked = false;
    }
    if ( fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
```
