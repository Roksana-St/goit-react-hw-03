import styles from './SearchBox.module.css';

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.searchBox}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)} 
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;

