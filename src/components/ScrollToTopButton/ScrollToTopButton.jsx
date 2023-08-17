import { Component } from 'react';
import { BsCaretUpFill } from 'react-icons/bs';

class ScrollToTopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { threshold } = this.props;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.setState({ showButton: scrollTop > threshold });
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  render() {
    const { showButton } = this.state;

    return (
      <button
        className="btn  topscroll"
        onClick={this.scrollToTop}
        style={{ display: showButton ? 'block' : 'none' }}
      >
        <BsCaretUpFill size="2.5rem" color="#fff" />
      </button>
    );
  }
}

export default ScrollToTopButton;