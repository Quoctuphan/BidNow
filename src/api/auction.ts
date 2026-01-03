import request from '@/utils/request';

const handleSuccess = (data: any) => {
    console.log('data success', data);
};

const handleError = (error: any) => {
    console.log('error', error);
};

export const getAuction = () => {
    return request({
        method: 'get',
        onSuccess: handleSuccess,
        onError: handleError,
    });
};

export const getAuctionDetail = (apiEndpoint: string) => {
    request({
        method: 'get',
        serverType: 'php',
        apiEndpoint: apiEndpoint,
        onSuccess: handleSuccess,
        onError: handleError,
    });
}