type BeautyParagraphProps = {
    children: React.ReactNode;
};

export default function BeautyParagraph({ children }: BeautyParagraphProps) {
    return (
        <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed tracking-wide font-nunito">
            {children}
        </p>
    );
}