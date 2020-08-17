const API_BASE_URL = 'https://api.thedogapi.com/v1';

const request = async url => {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const result = await response.json();
            return result
        } else {
            const err = await response.json();
            return err;
        }
    } catch(e) {
        return {
            message: e.message,
            status: e.status
        }
    }
};

const api = {
    fetchRandom: async () => {
        try {
            const requestData = await request(`${API_BASE_URL}/images/search?limit=1`);
            return {
                isError: false,
                data: requestData
            }
        } catch(e) {
            return {
                isError: true,
                data: e
            }
        }
    }
};

export { api };