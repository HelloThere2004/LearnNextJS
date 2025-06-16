import Image from "next/image"

type CaseCardProps = {
    title: string,
    link: string
}

export default function CaseCard({title, link}: CaseCardProps) {
    return (
        <div className="case-card">
            <div className="image-container">
                <Image src={link} alt="Case" width={200} height={200} />
            </div>
            <h3 className="title-card">{title}</h3>
        </div>
    )
}