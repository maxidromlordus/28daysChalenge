// elements
const wrapper = document.getElementById("wrapper"); //create 28 fields

for (let i = 0; i <= 28; i++) {
  const field = document.createElement("div");
  field.id = `field${i}`;
  field.classList.add("field");
  field.innerHTML = `${i}`;
  wrapper.appendChild(field);
}