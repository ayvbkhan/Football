import './Input.css'
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string | undefined,
  isError: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, errorMessage, isError, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...props}

        />
        {isError && (
          <p style={{ color: "red", marginBottom: "4px", marginTop: "0" }}>
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);
