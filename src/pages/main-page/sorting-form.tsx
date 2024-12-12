import { memo, useState } from 'react';

type SortingFormProps = {
  onSortChange: (selectedSort: string) => void;
};

function SortingFormComponent({ onSortChange }: SortingFormProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Popular');

  const sortingOptions = [
    'Popular',
    'Price: low to high',
    'Price: high to low',
    'Top rated first',
  ];

  const handleSortSelection = (option: string) => {
    setSelectedSort(option);
    setIsOpen(false);
    onSortChange(option);
  };

  return (
    <form className="places__sorting">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      {isOpen && (
        <ul className="places__options places__options--custom places__options--opened">
          {sortingOptions.map((option) => (
            <li
              key={option}
              className={`places__option ${option === selectedSort ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => handleSortSelection(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}

export const SortingForm = memo(SortingFormComponent);
