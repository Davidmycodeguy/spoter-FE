
interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<IButton> = ({
    children,
    ...props
}) => (
    <button {...props}>
        {children}
    </button>
);
export default Button;