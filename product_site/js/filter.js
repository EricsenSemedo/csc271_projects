var filterDropdown = document.querySelector('.filter-dropdown');
var filterContent = filterDropdown.querySelector('.filter-content');
var filterContentVisible = false;

function toggleFilter() {
    if (!filterContentVisible) {
        filterContent.style.display = 'block';
        filterContentVisible = true;
    }
    else {
        filterContent.style.display = 'none';
        filterContentVisible = false;
    }
}

filterDropdown.addEventListener('click', toggleFilter);
