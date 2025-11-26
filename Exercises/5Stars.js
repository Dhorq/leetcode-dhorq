function stars() {
  let star = "";
  for (let i = 1; i <= 5; i++) {
    star += "*";
    console.log(star);
  }
  for (let i = 4; i >= 1; i--) {
    console.log(star.slice(1));
    star = star.slice(1);
  }
}
