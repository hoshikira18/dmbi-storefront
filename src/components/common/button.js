const { cn } = require('@/lib/utils');
const { default: Link } = require('next/link');

const Button = ({
    className = '',
    children,
    size = '',
    href = '',
    // onClick = () => {},
}) => {
    const ComponentTag = href ? Link : 'button';
    const attributes = {
        href,
        className: cn(
            ' border-2 border-primary bg-gradient-to-tr from-primary/50 to-primary px-5 py-3 text-lg font-bold uppercase text-white transition-all duration-200 hover:border-white',
            className
        ),
        // onClick,
    };
    return <ComponentTag {...attributes}>{children}</ComponentTag>;
};

export default Button;
