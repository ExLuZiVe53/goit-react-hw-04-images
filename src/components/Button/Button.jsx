import { Button } from './Button.styled';

export const BTNLoadMore = ({ newFetchImages }) => {
  return <Button onClick={() => newFetchImages()}>Load More</Button>;
};

// import { Button } from './Button.styled';

// export const BTNLoadMore = ({ onChange }) => {
//   return <Button onClick={() => onChange()}>Load More</Button>;
// };
