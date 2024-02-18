import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { ErrorImage } from "assets/images";

interface IProps {
  children: React.ReactNode;
  message?: string;
  isError?: boolean;
  onBack?: () => void;
  backLink?: string;
}

export const ErrorWrapper: React.FC<IProps> = ({
  message = "Something went wrong!",
  isError = false,
  children,
  onBack,
  backLink,
}) => {
  return (
    <>
      {isError && (
        <div className="flex items-center flex-col gap-6">
          <div>
            <img src={ErrorImage} alt="error" className="object-contain h-72" />
          </div>
          <h1 className="text-xl ">{message}</h1>
          {onBack && (
            <Button onClick={() => onBack()} type="primary">
              Go Back
            </Button>
          )}
          {backLink && (
            <Link to={backLink}>
              <Button>Go Back</Button>
            </Link>
          )}
        </div>
      )}
      {!isError && <>{children}</>}
    </>
  );
};
