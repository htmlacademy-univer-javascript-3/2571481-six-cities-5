import { useAppSelector } from "@hooks/index"

export function OfferGallery(): JSX.Element {
  const images = useAppSelector((state) => state.singleOffer?.images) as string[];

  return (
    <div className="offer__gallery">
      {images.map((image, index) => (
        <div className="offer__image-wrapper" key={index}>
          <img className="offer__image" src={image} alt="Photo studio"/>
        </div>
      ))}
    </div>
  )
}