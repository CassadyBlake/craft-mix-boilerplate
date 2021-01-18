import Masonry from 'masonry-layout'

const grid = document.querySelector('.masonry-grid')
const masonry = new Masonry( grid, {
    itemSelector: '.masonry-item',
    columnWidth: '.masonry-sizer',
    gutter: '.masonry-gutter-sizer',
    fitWidth: true,
    // percentPosition: true
})

export { masonry as defualt }