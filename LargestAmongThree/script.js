function res() {
  const v1 = document.getElementById("d1").value;
  const v2 = document.getElementById("d2").value;
  const v3 = document.getElementById("d3").value;

  // console.log(v1);
  // console.log(v2);
  // console.log(v3);

  // document.getElementById("result").innerHTML = `v1 ${v1} v2 ${v2} v3 ${v3}`;

  if (Number(v1) >= Number(v2) && Number(v1) >= Number(v3)) {
    document.getElementById(
      "result"
    ).innerText = `the largest number is ${v1}`;
  } else if (Number(v2) >= Number(v1) && Number(v2) >= Number(v3)) {
    document.getElementById(
      "result"
    ).innerText = `the largest number is ${v2}`;
  } else if (Number(v3) >= Number(v1) && Number(v3) >= Number(v3)) {
    document.getElementById(
      "result"
    ).innerText = `the largest number is ${v3}`;
  }
}