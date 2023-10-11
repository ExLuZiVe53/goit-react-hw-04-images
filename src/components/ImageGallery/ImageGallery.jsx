import { useState } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';
import { ImaGalleryUl } from './ImageGallery.styled.js';
import { Modal } from '../Modal/Modal.jsx';

const ImageGallery = ({ images }) => {
  const [isModal, setIsShowModal] = useState(false);
  const [ImageData, setImageData] = useState({});
  //знаходжу картинку по кліку по айді
  const getImgById = id => {
    setIsShowModal(true);
    setImageData(images.find(el => el.id === id));
  };

  //   //закриття модалки
  function modalIsClose() {
    setIsShowModal(false);
  }

  return (
    <ImaGalleryUl>
      {images.map(img => {
        return (
          <ImageGalleryItem
            key={img.id}
            isModal={isModal}
            getImgById={getImgById}
            picture={img}
          />
        );
      })}
      <Modal
        modalIsOpen={isModal}
        img={ImageData}
        closeModal={modalIsClose}
      ></Modal>
    </ImaGalleryUl>
  );
};
export default ImageGallery;

// import { Component } from 'react';
// import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.jsx';
// import { ImaGalleryUl } from './ImageGallery.styled.js';
// import { Modal } from '../Modal/Modal.jsx';

// export class ImageGallery extends Component {
//   //стан
//   state = {
//     ImageData: {},
//     isModal: false,
//   };
//   //знаходжу картинку по кліку по айді
//   getImgById = id =>
//     this.setState({
//       ImageData: this.props.images.find(el => el.id === id),
//       isModal: true,
//     });
//   //закриття модалки
//   modalIsClose = () => {
//     this.setState({ isModal: false });
//   };

//   render() {
//     return (
//       <ImaGalleryUl>
//         {this.props.images.map(img => {
//           return (
//             <ImageGalleryItem
//               key={img.id}
//               isModal={this.state.isModal}
//               getImgById={this.getImgById}
//               picture={img}
//             />
//           );
//         })}
//         <Modal
//           modalIsOpen={this.state.isModal}
//           img={this.state.ImageData}
//           closeModal={this.modalIsClose}
//         ></Modal>
//       </ImaGalleryUl>
//     );
//   }
// }
