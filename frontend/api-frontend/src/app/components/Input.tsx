import React from "react";

interface IInputProps {
  label: string;
  value: string;
  type?: string;

  onChange: (newValue: string) => void;
  onPressEnter?: () => void;
}
export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => {
    return (
      <label>
        <span className="block text-sm/6 font-semibold text-gray-900">
          {props.label}
        </span>
        <input
          type={props.type}
          value={props.value}
          ref={ref}
          onChange={(e) => props.onChange(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? props.onPressEnter && props.onPressEnter()
              : undefined
          }
          className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        />
      </label>
    );
  },
);
