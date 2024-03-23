const dataListArr = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1209887384/photo/green-t-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=8M4gaRs-fUz6CdYEl4OblIoDvNjcRs8_Sbzs0VxWlMY=",
    name: "kofta1",
    price: 25,
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png",
    name: "kofta2",
    price: 20,
  },
  {
    id: 3,
    img: "https://media.istockphoto.com/id/1076492576/vector/pants-cartoon.jpg?s=612x612&w=0&k=20&c=7x-Y65s9B47yqGxCVLiTWvgYYAjqi0zdffvp1EgeHN8=",
    name: "salvar",
    price: 30,
  },
  {
    id: 4,
    img: "https://www.shutterstock.com/image-photo/vintage-red-shoes-on-white-260nw-92008067.jpg",
    name: "ayaqqabi",
    price: 35,
  },
];

console.log(dataListArr);
const render = (list) => {
  const ul = document.querySelector("ul");
  ul.innerText = "";

  list.forEach((e) => {
    const li = document.createElement("li");
    ul.appendChild(li);
    const image = document.createElement("img");
    li.appendChild(image);
    image.setAttribute("src", e.img);
    image.setAttribute("alt", e.name);
    image.classList.add("data-img");
    const div = document.createElement("div");
    li.appendChild(div);
    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.innerText = e.name;
    const p = document.createElement("p");
    div.append(p);
    p.innerText = e.price;
  });
};

render(dataListArr);

const inp = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const alma = inp.value.trim().toLowerCase();
  const newArr = dataListArr.filter((e) => e.name.toLowerCase().includes(alma));
  render(newArr);
});
