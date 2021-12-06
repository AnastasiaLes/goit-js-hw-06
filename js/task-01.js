const getCategoriesNumber = document.querySelectorAll('.item');
console.log(`Number of categories: ${getCategoriesNumber.length}`);


getCategoriesNumber.forEach(category => {
    const getCategoryTitle = category.querySelector('h2');
    const getCategoryLi = category.querySelectorAll('li')
    console.log(`Category: ${getCategoryTitle.textContent}`);
    console.log(`Elements: ${getCategoryLi.length}`);
});



