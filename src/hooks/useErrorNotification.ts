import { useEffect } from "react"
import { toast } from "sonner"

export const useErrorNotification = (isError: boolean, title: string, description: string) => {
    useEffect(() => {
        if (isError) {
            toast(title, { description });
        }
        
    }, [isError, description, title])
};