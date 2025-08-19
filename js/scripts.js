window.addEventListener('DOMContentLoaded', event => {

    let listMessages = "";

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };
    
    function populateMango() {
        $.getJSON('assets/json/mangoes-template.json', function(data) {
            
            newMango = data;
            
            let listMangoes = data['mangoes']
            let listLength = listMangoes.length;
    
            let MangoTemplateIcon = "";
            let MangoModals = "";
            for (let i = 0; i < listLength ; i++) {
                let title = listMangoes[i]['title']['en'];
                let link = listMangoes[i]['link'];
                let desc = listMangoes[i]['description'];
                let img = listMangoes[i]['image_link']['main'];
                let genre = listMangoes[i]['genre'];
                let rate = Math.round(listMangoes[i]['rating']);


                let mangoes = "";
                for (let j = 0; j < rate; j++) {
                    mangoes = mangoes + `<span>🥭</span>`
                }
                
                MangoTemplateIconTemp = `<div class="col-md-4 col-lg-3 mb-4">
                                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal`+i+`">
                                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                                <div class="portfolio-item-caption-content text-center text-white">
                                                <i class="fa-solid fa-book-open fa-3x"></i><br>
                                                `+title+`
                                                </div>
                                            </div>
                                            <img class="img-fluid rounded mb-5 center thumbnails" src="`+img+`" alt="..." />
                                            <div class="d-flex align-items-center justify-content-center h-100 w-100">
                                                <p class="lead">`+title+`</p>
                                            </div>
                                            
                                        </div>
                                    </div>`;
    
    
                MangoTemplateIcon = MangoTemplateIcon + MangoTemplateIconTemp;
            }    
    
            const boxProper = document.getElementById('mangoes-target-div');  
            boxProper.innerHTML = MangoTemplateIcon;
        })
        
    }

    populateMango();
    getQuery();
});

