import { format } from "date-fns";

export const getDateTime = () => {
    const date = new Date()
    return format(date, 'yyyy-MM-dd,HH:mm:ss');
}