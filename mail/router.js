class Router {
  constructor(node){
    this.node = node;
  }
  
  start(){
    this.render();
    window.addEventListener('hashchange', () => {
      this.render.bind(this);
    });
  }
  
  activeRoute() {
    return window.location.hash.slice(1);
  }
  
  render() {
    this.node.innerHTML = "";
    let newNode = document.createElement("p");
    newNode.innerHTML = this.activeRoute();
    if (newNode) {
      this.node.appendChild(newNode);
    }
  }
}

module.exports = Router;