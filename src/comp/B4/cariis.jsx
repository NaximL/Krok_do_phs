
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';


const Project = () => {
    const images = [
        {   
          original:"imgs/ditina1.png"  ,
          thumbnail: "imgs/ditina1.png" , 
        },
        {   
          original: "imgs/ditina2.png" ,
          thumbnail: "imgs/ditina2.png" , 
        },
        {   
          original: "imgs/ditina3.png" ,
          thumbnail: "imgs/ditina3.png" , 
        },
    ];

    return ( 
        <>
            <div className='waf'>
                <ImageGallery showThumbnails={false} showFullscreenButton={false}  showPlayButton={false} items={images} />
            </div>
        </>
    );
}

export default Project;