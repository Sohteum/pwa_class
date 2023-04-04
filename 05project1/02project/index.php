<?php include "header.php" ?>
<script src="./store/store.js"></script>
<script src="./js/home.js"></script>


<section class="home_visual">
</section>

<script>
  homeVisualArr.forEach(function(v) {
    $(`.home_visual`).append(`
    <figure>
    <img src=${v.path}>
    <figcaption>
      <h5>${v.title}</h5>
      <p>${v.desc}</p>
    </figcaption>
  </figure>
    `)
  })
</script>

<section class="feature">
  <ul>
  </ul>
</section>

<script>
  featureArr.forEach(function(v) {
    $(`.feature ul`).append(`
    <li>
      <a href="${v.link}">
        <figure>
          <img src="${v.path}" alt="">
          <figcaption>
          <h3>${v.title}</h3>
          <p>${v.desc}</p>
          </figcaption>
        </figure>
      </a>
    </li>
    `)
  })
</script>


<?php include "footer.php" ?>