type BeautyTitleProps = {
    children: React.ReactNode;
    center?: boolean;
};

export default function BeautyTitle({ children, center = false }: BeautyTitleProps) {
    return (
        <h2 className={`text-3xl sm:text-4xl font-bold text-pink-600 mb-6 tracking-wide ${center ? 'text-center' : ''}`}>
            {children}
        </h2>
    );
}
