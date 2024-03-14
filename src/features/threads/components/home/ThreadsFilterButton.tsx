import { Button } from '@/common/components/ui/button';
import { useAppDispatch, useAppSelector } from '@/common/hooks';
import { setCategoryFilter } from '../../slices/threadsSlice';
import { FC } from 'react';

interface ThreadsFilterButtonProps {
  category: string;
}

const ThreadsFilterButton: FC<ThreadsFilterButtonProps> = ({ category }) => {
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(
    (state) => state.threads.filter.category,
  );

  const isSelected = selectedCategory === category;

  const onClick = () => {
    if (isSelected) {
      return dispatch(setCategoryFilter(null));
    }
    dispatch(setCategoryFilter(category));
  };

  return (
    <Button
      className="mr-2"
      onClick={onClick}
      variant={isSelected ? 'default' : 'outline'}
    >
      {category}
    </Button>
  );
};

export default ThreadsFilterButton;
