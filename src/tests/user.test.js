import nock from 'nock';
import { getUsers } from './../api/users.api';

jest.mock('@/utils/request');

describe('getUsers', () => {
    const API_URL = 'http://localhost:3000';

    afterEach(() => {
        nock.cleanAll();
        jest.resetAllMocks();
    });

    it('should fetch users successfully', async () => {
        const mockResponse = [
            { id: 1, name: 'John Doe' },
            { id: 2, name: 'Jane Doe' },
        ];

        nock(API_URL)
            .get('/users')
            .reply(200, mockResponse);

        const handleSuccess = jest.fn();
        const handleError = jest.fn();

        await getUsers()
            .then(handleSuccess)
            .catch(handleError);

        expect(handleSuccess).toHaveBeenCalledWith(mockResponse);
        expect(handleError).not.toHaveBeenCalled();
    });

    it('should handle error while fetching users', async () => {
        nock(API_URL)
            .get('/users')
            .reply(500, { message: 'Internal Server Error' });

        const handleSuccess = jest.fn();
        const handleError = jest.fn();

        await getUsers()
            .then(handleSuccess)
            .catch(handleError);

        expect(handleSuccess).not.toHaveBeenCalled();
        expect(handleError).toHaveBeenCalled();
    });
});
