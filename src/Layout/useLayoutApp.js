import { useState } from "react";
export const useLayoutApp = () => {
 
 const [isLoading, setIsLoading] = useState(false);
 const handleLoading = () => setIsLoading(true);
 const handleLoad = () => setIsLoading(false);

 return { isLoading, handleLoading, handleLoad }
}
