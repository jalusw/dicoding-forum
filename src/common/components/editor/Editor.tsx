import { cn } from '@/common/utils/utils';
import { FC } from 'react';

interface EditorProps {
  className?: string;
  value?: string;
  onChange?: (event: React.FormEvent<HTMLDivElement>) => void;
}

const Editor: FC<EditorProps> = ({ className, value = '', onChange }) => {
  const baseStyles =
    'h-[100px] w-full overflow-y-scroll rounded-md p-2 shadow-border';
  return (
    <div
      className={cn(baseStyles, className)}
      onInput={onChange}
      role="textbox"
      suppressContentEditableWarning
      contentEditable
    >
      {value}
    </div>
  );
};

export default Editor;
