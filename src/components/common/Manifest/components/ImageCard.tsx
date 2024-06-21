import './ImageCard.scss';

interface IImageCardProps {
  album: string[];
  n: number;
  caption?: string;
}

export function ImageCard({ album, n, caption }: IImageCardProps) {
  return (
    <div className='image-card-container'>
      <p className='text-pptelegraph'>0{ n }</p>
      {
        album?.map(src => 
          <img
            alt=''
            src={src}
            width={'178px'}
            height={'178px'}
          />
        )
      }
      <h5 className='text-heathergreen'>{ caption }</h5>
    </div>
  );
}