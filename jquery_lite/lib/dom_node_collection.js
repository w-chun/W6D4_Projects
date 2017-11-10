class DomNodeCollection {
  constructor(nodes) {
  this.nodes = nodes;
  }

  html(html) {
    if (typeof html === 'string') {
      this.nodes.forEach(node => {
        node.innerHTML = html;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(arg) {
    if (typeof arg === 'string') {
      this.nodes.forEach (node => {
        node.innerHTML += arg;
      });
    } else if (arg instanceof DomNodeCollection) {
        this.nodes.forEach( node => {
          arg.forEach( el => {
            node.html += el;
          });
        });
    }
  }

  attr() {

  }

  addClass(){

  }

  removeClass() {

  }

  children() {
  
  }

  find() {

  }

  remove() {

  }
}

module.exports = DomNodeCollection;
