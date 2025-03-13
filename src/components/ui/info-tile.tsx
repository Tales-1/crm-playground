import Image from "next/image";

interface InfoTileProps {
  title: string;
  image?: string;
  metadata?: { [key: string]: any; value: any }[];
  size?: "small" | "medium" | "large"
}

export default function InfoTile({ title, image, metadata, size = "medium" }: InfoTileProps) {

  const titleSize = size == 'large' ? "text-xl" 
   : size == "small" ? "text-sm" : "text-base";

   const imageSize = size == "large" ? "w-14" :
   size == "small" ? "w-8" : "w-10";

  return (
    <div className="flex gap-3">
      <div
        className={`${imageSize} mr-3 w-14 aspect-square rounded-md 
        bg-accent/20 text-accent flex items-center 
        justify-center text-on-surface font-bold`}
      >
        {image ? (
          <Image src={image} alt="User uploaded image" />
        ) : (
          title.charAt(0)
        )}
      </div>
      
      <div>
        <p className={`${titleSize}`}>{title}</p>
        <p className="text-sm text-muted">
          {metadata?.map((data, index) => {
            const isLast = index == metadata.length - 1;
            return (
              <>
                <span key={data.key}>{data.value}</span>
                {!isLast && ", "}
              </>
            );
          })}
        </p>
      </div>
    </div>
  );
}
