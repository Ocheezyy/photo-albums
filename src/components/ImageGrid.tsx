import { Photo } from "@/schemas";
import Placeholder from "@/assets/placeholder.svg";

type ImageGridProps = {
    photos: Photo[] | undefined
}

const ImageGrid = ({ photos }: ImageGridProps) => {
    return (
        <div className="max-w-[420px] mx-auto pt-4">
            <div className="grid grid-cols-3 gap-1">
                {photos?.map((image) => (
                <div key={image.id} className="relative overflow-hidden rounded-sm object-cover">
                    <img
                        // Uncomment this if you would like to see that the url is set correctly.
                        // src={image.thumbnailUrl}
                        src={Placeholder}
                        alt={`album-image-${image.id.toString()}`}
                        sizes="(max-width: 420px) 33vw"
                        className="object-cover"
                    />
                </div>
                ))}
            </div>
        </div>
    )
}

export default ImageGrid;