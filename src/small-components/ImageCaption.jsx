import { Typography } from "@material-tailwind/react";
 
export function ImgWithBlurredCaption({imgSRC, capHead, capDetail, capPrice}) {
  return (
    <figure className="relative h-96">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src={imgSRC}
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            {capHead}
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
            {capDetail}
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
            {capPrice}
        </Typography>
      </figcaption>
    </figure>
  );
}