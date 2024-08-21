import React from 'react';
import TagsFilter from './tags-filter';
import CategoriesFilter from './categories-filter';
import CollectionsFilter from './collections-filter';

const ProductFilter = ({ setTagsId, setCollectionsId, setCategoriesId }) => {
    return (
        <div className="space-y-5">
            <TagsFilter setTagsId={setTagsId} />
            <CategoriesFilter setCategoriesId={setCategoriesId} />
            <CollectionsFilter setCollectionsId={setCollectionsId} />
        </div>
    );
};

export default ProductFilter;
