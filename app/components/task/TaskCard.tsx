'use client';

import { RxCross2 } from "react-icons/rx";
import DeleteAlertDialog from '../ui/DeleteAlertDialog';

interface ITaskCardProps {
  title: string;
  id: number;
  completed: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskCard: React.FC<ITaskCardProps> = ({
  title,
  id,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <div>
      <div
        className={`flex items-center justify-between pt-4 pb-4 px-2 rounded-lg transition-colors duration-300 hover:bg-[rgb(37,37,37)] ${
          completed ? 'bg-[rgb(57,57,57)]' : 'bg-[rgb(22,22,22)]'
        }`}
      >
        <div className="flex items-center">
          <label className="relative flex items-center justify-center w-5 h-5 mr-2 border border-gray-500 rounded-full cursor-pointer">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => onToggle(id)}
              className="absolute opacity-0 cursor-pointer"
            />
            {completed && <div className="w-3 h-3 bg-blue-500 rounded-full" />}
          </label>
          <p
            className={`flex-1 text-lg ${
              completed ? 'line-through text-gray-500' : 'text-white'
            }`}
          >
            {title}
          </p>
        </div>
        <div>
          {completed === true ? (
            <RxCross2
              onClick={() => onDelete(id)}
              className="text-red-500 hover:text-red-700 cursor-pointer"
              size={20}
            />
          ) : (
            <DeleteAlertDialog id={id} onDelete={() => onDelete(id)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
