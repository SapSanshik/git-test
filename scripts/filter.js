(function() {
const elem = document.querySelector('.product__list');
const iso = new Isotope( elem, {
  itemSelector: '.products__item',
  filter:'.new'
});

    const controlls = document.querySelectorAll('filter__link');
    const activeClass = "filter__item__filter__item--active";

    controlls.forEach(function(control) {
        control.addEventListener('click', function(e) {
            e.preventDefault();

            const filterName = control.getAttribute("date-filter")

            control.forEach(function(link){
                link.closest('.filter__item__filter__item--active').classList.remove(activeClass);
            })

            control.closest('.filter__item__filter__item--active').classList.add(activeClass);

            iso.arrange({
                filter: `.${filterName}`
            })
        })   
    })
})();