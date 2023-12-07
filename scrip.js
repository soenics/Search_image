const inputboxTag = document.querySelector(".inputbox");
const url = "https://api.unsplash.com/search/photos?query=newyork&client_id=";
const keys = "yt4ckFhA2EvWPVu9SsXoQl3INw5zFfOJxM8umhutD00";
const imageTag = document.querySelector(".photocla");
const btnTag = document.querySelector(".btnone");
const imagebox2 = document.querySelector(".imagebox");

btnTag.addEventListener("click", () => {
  const searchname = inputboxTag.value;
  btnTag.classList.add("soenics");

  fetch(
    `https://api.unsplash.com/search/photos?query=${searchname}&client_id=yt4ckFhA2EvWPVu9SsXoQl3INw5zFfOJxM8umhutD00`
  )
    .then((urlss) => {
      const imageone = urlss.json();
      return imageone;
    })
    .then((imagemain) => {
      imagebox2.innerHTML = "";
      codedetaile();
      console.log(imagemain);

      function codedetaile() {
        let pluse = 0;

        imagemain.results.map((i) => {
          let classname1 = "class" + pluse;
          const maindivTag = document.createElement("div");
          maindivTag.classList.add("maindiv");

          const imgTag1 = document.createElement("img");
          const imagetitle = document.createElement("p");
          imagetitle.classList.add("title");

          imgTag1.classList.add(classname1);
          imgTag1.src = i.urls.small;
          imagetitle.textContent = i.alt_description;

          imagebox2.append(maindivTag);
          maindivTag.append(imgTag1);
          maindivTag.appendChild(imagetitle);
        });
      }
    });
});
