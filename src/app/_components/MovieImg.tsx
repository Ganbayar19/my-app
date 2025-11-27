import Image from "next/image";

type MovieImgProps = {
    backdrop_path:string
    title:string
    className:string
}

export default function MovieImg({backdrop_path, title, className}: MovieImgProps){
    return(
        <Image
        src={}
        />
    )
}