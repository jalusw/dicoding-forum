import { useAppSelector } from "@/common/hooks";
import { FC, ReactElement } from "react"

interface GuestWrapperProps{
  children: ReactElement;
}

const GuestWrapper :  FC<GuestWrapperProps> = ({children}) => {
  const token = useAppSelector(state => state.authentication.token);
  const user = useAppSelector(state => state.authentication.user);

  const trimmedToken = token.trim();
  const trimmedTokenLength = trimmedToken.length;

  if(trimmedTokenLength > 0 && user != null){
    return <></>;
  }
  
  return children;
}

export default GuestWrapper;
