'use client';

import Button from '@/components/common/button';
import Title from '@/components/common/title';
import UsesCard from '@/components/homepage/uses/uses-card';
import UsesCardSkeleton from '@/components/homepage/uses/uses-card-skeleton';
import { useProductCategories } from 'medusa-react';

const Uses = () => {
    const { product_categories, isLoading } = useProductCategories();
    console.log(product_categories);

    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="bg-gradient-to-b from-primary/80 to-primary/50 px-5 pb-10">
            <Title
                className="text-center text-white"
                title="Ứng dụng ngành công nghiệp"
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {!isLoading
                    ? product_categories?.map((category, index) => {
                          return (
                              <UsesCard
                                  key={category.id}
                                  categoryId={category.id}
                                  categoryTitle={category.name}
                                  categoryImage={category.metadata.image}
                              />
                          );
                      })
                    : new Array(8).fill(null).map((product, i) => {
                          return <UsesCardSkeleton key={i} />;
                      })}
            </div>
            <div className="mt-10 flex justify-center">
                <Button href="/">Xem thêm</Button>
            </div>
        </div>
    );
};

export default Uses;
