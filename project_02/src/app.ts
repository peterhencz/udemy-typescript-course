const button: any = document.querySelector("button")!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  // return;
}

function clickHandler(message: string) {
  // let user = "Ozzy";
  console.log("clicked" + message);
}

if (button) {
  button.addEventListener("click", clickHandler.bind(null, "foo"));
}
