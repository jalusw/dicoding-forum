import { FC, ReactElement } from 'react';

interface ThreadPageContainerProps {
  children: ReactElement | ReactElement[];
}

const ThreadPageContainer: FC<ThreadPageContainerProps> = ({ children }) => {
  return <div className="container max-w-screen-md py-16">{children}</div>;
};

export default ThreadPageContainer;
