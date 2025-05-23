export const Heading1 = ({ text, classname }: { text: string, classname?: string }) => {
    return (
        <h1 className={` text-7xl font-bold ${classname}`}>{text}</h1>
    )
}
export const Heading2 = ({ text, classname }: { text: string, classname?: string }) => {
    return (
        <h1 className={` ${classname} text-6xl font-bold`}>{text}</h1>
    )
}
export const Heading3 = ({ text,classname }: { text: string,classname?:string }) => {
    return (
        <h1 className={`${classname} font-semibold text-2xl`}>{text}</h1>
    )
}
export const ParagraphText = ({ text, classname }: { text: string, classname?: string }) => {
    return (
        <p className={` ${classname}`}>{text}</p>
    )
}

export const NavText = ({ text, classname }: { text: string, classname: string }) => {
    return (
        <h1 className={`text-3xl font-bold ${classname}`}>{text}</h1>
    )
}