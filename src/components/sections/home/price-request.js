import { Input, TextArea } from '@/components/common';
import Button from '@/components/common/button';
import Title from '@/components/common/title';
import { cn } from '@/lib/utils';
import React from 'react';

const PriceRequest = ({ className = '' }) => {
    return (
        <div className={cn('', className)}>
            <Title className="bg-primary text-white md:py-4">
                Gửi yêu cầu báo giá
            </Title>
            <div className="space-y-3 border bg-white/90 p-5 shadow">
                <Input placeholder={'Tên khách hàng/đơn vị'} />
                <Input placeholder={'Số điện thoại liên hệ'} />
                <Input placeholder={'Email nhận báo giá'} />
                <Input placeholder={'Sản phẩm hệ thống cần báo giá'} />
                <TextArea placeholder={'Nội dung chi tiết'} />
                <Button className="text-base">Gửi yêu cầu</Button>
            </div>
        </div>
    );
};

export default PriceRequest;
