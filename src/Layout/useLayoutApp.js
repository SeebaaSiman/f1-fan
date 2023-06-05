import { useState } from "react";
export const useLayoutApp = () => {

 const [isLoading, setIsLoading] = useState(false);
 const onLoading = () => setIsLoading(true);
 const onLoad = () => setIsLoading(false);

 return { isLoading, onLoading, onLoad }
}
