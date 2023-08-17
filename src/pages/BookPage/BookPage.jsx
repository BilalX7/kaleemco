import './BookPage.css'
import styles from '../../style';
import { Books, Footer }  from '../../components';

const BookPage = () => {
  return (
    <>
      <div className={`bg-inherit ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Books />
        </div>
      </div>
      <Footer 
        className= "footer-books"
      />
    </>
  )
}

export default BookPage