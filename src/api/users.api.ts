import { createUserPayload } from "@/types/User";
import { QueryClient } from "@tanstack/react-query";
import request from '@/utils/request';

const handleSuccess = (data: any) => {
    console.log('data success', data);
};

const handleError = (error: any) => {
    console.log('error', error);
};

export const postUser = (
    data: createUserPayload,
    queryClient: QueryClient,
    onClose: () => void,
) => {
    return request({
        method: 'post',
        url: '/users',
        data,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['USERS'] });
            onClose();
        },
        onError: (error) => {
            const message = error.message;
            let stringMessage = '';
            if (Array.isArray(message)) {
                message.forEach((item) => {
                    stringMessage += item + '. \n';
                });
                alert(stringMessage);
            } else {
                alert(message);
            }
        },
    });
};

export const getUsers = () => {
    return request({
        method: 'get',
        url: '/users',
        onSuccess: handleSuccess,
        onError: handleError,
    });
};