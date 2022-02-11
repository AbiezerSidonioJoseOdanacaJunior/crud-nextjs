interface ButtonProps {
    cor?: 'green' | 'blue' | 'gray'
    className: string
    children: any
}

export default function Button(props: ButtonProps) {
    const cor = props.cor ?? 'gray'
    return (
        <button className={`
            bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-800
            text-white px-4 py-2 rounded-md
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}