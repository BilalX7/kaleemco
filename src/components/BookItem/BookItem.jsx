import { Component } from 'react';
import PropTypes from 'prop-types';
import './BookItem.css';
import ButtonSecondary from '../Button/ButtonSecondary';
// import catone from '../../assets/catone.png';

class BookItem extends Component {
  render() {
    // const author = this.props.properties && this.props.properties.author;
    return (

      <div key={this.props.id} className="book-item bg-gray-900 shadow-md rounded-lg overflow-hidden">
        <div className='picture-holder'>
            <div className='book-photo'>
              <div className='f_p_p'>
                <picture>
                  <img src={this.props.imgs} alt="cat" />
                </picture>
              </div>
            </div>
        </div>
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 book-title">{this.props.name}</h2>
          <p className="text-gray-700 text-base book-author">{this.props.author}</p>
        </div>
        <a download={this.props.pdf} href={this.props.pdf}>
          <ButtonSecondary name="Download" />
        </a>
      </div>
    )
  }
}

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
//   properties: PropTypes.shape({
//     author: PropTypes.string.isRequired
//   }),
  pdf: PropTypes.string.isRequired,
  imgs: PropTypes.string.isRequired
};

export default BookItem;
