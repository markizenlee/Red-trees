function ProductCategory({ category }) {
    return (
        <div data-category={category.id}>
            {category.name}
        </div>
    );
}

export default ProductCategory;
