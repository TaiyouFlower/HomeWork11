import data from "./data.js";
console.log(data);

const bookList = document.getElementById("bookList");

data.books.map((books) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("col-4");
  card.innerHTML = `<img class="card-img" src=${books.cover_image_url} alt="Vans">
          <div class="card-img-overlay d-flex justify-content-end">
            <a href="#" class="card-link text-danger like">
              <i class="fas fa-heart"></i>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title">${books.title}</h4>
            <p class="card-text">${books.description}        </p>
            <div class="options d-flex flex-fill">
            </div>
            <div class="buy d-flex justify-content-between align-items-center">
              <div class="price text-success"><h5 class="mt-4">${books.price}</h5></div>
            <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Shelf</a>
            </div>
          </div>
`;
  bookList.appendChild(card);
});
