// 1. create a constructor for a `Comment`. New comments should initialize with some text.
// 2. instances of comments should have a prototype method called 'render' that returns a string of an `li` with that comment's text inside.

class Comment {
  constructor(someText) {
    this.someText = someText;
  }
  render() {
    return document.getElementById('li')
  }
}
