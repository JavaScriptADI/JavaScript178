export function deselectCategories(currentCategoryDiv) {
    document.querySelectorAll('.category-link').forEach(categoryDiv => {
        if (categoryDiv === currentCategoryDiv) {
            return;
        }
        categoryDiv.classList.remove('text-primary');
        categoryDiv.classList.add('text-secondary');
    });
}
