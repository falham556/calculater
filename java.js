const d = document.getElementById("display_area");

document.querySelectorAll("button").forEach(b =>
  b.onclick = () => {
    let v = b.innerText;
    d.innerText =
      v == "C" ? "" :
      v == "DEL" ? d.innerText.slice(0,-1) :
      v == "=" ? eval(d.innerText) :
      d.innerText + v;
  }
);