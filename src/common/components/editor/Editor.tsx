import { cn } from '@/common/utils/utils';
import { FC } from 'react';

interface EditorProps {
  className?: string;
  onChange?: (event: React.FormEvent<HTMLDivElement>) => void;
}

const Editor: FC<EditorProps> = ({ className, onChange }) => {
  const baseStyles =
    'h-[100px] w-full overflow-y-scroll rounded-md p-2 shadow-border';
  return (
    <div
      className={cn(baseStyles, className)}
      onInput={onChange}
      role="textbox"
      contentEditable
    ></div>
  );
};

export default Editor;
