const projectsContainer = document.querySelector('.portfolio-container');

appProjects.forEach(project => {
    projectsContainer.innerHTML += `
    <div class="col-lg-4 col-md-6 portfolio-item filter-app">
        <div class="portfolio-wrap">
          <img src="assets/img/portfolio/${project.image}" class="img-fluid" alt="">
          <div class="portfolio-info">
            <h4>${project.name}</h4>
            <p>${project.stack}</p>
            <div class="portfolio-links">
                <a href=${project.githubLink } target='/blank' data-gallery="portfolioGallery" class="portfolio-lightbox" title="Web 3"><i class="bx bx-plus"></i></a>
                ${project.projectLink 
                    ?`<a href=${project.projectLink} target='/blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>` 
                    :""
                 }
            </div>
          </div>
        </div>
    </div>
    `
});


landingPageProjects.forEach(project => {
    projectsContainer.innerHTML += `
    <div class="col-lg-4 col-md-6 portfolio-item filter-lp">
    <div class="portfolio-wrap">
      <img src="assets/img/portfolio/${project.image}" class="img-fluid" alt="">
      <div class="portfolio-info">
        <p>${project.name}</p>
        <div class="portfolio-links">
          <a href=${project.projectLink} target='/blank' data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>
  </div>
    `
});



