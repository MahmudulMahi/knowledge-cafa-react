import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types'

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3">
      <h2 className="text-3xl">Bookmarks:{bookmarks.length}</h2>
      {
        bookmarks.map(bookmarks=><Bookmark key={bookmarks.id} Bookmark={bookmarks}></Bookmark>)
      }
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number
}
export default Bookmarks;