import { useEffect } from "react";
import { toast } from "sonner";

interface useErrorNotificationProps {
    isError: boolean;
    title: string;
    description: string | undefined;
}

export const useErrorNotification = ({isError, title, description}: useErrorNotificationProps) => {
    useEffect(() => {
        if (isError) {
            toast(title, { description });
        }
    }, [isError, description, title])
};