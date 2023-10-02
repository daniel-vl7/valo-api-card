import axios from 'axios';
export default {
    async getCardInfo() {
        try {
            const response = await axios.get('https://valorant-api.com/v1/playercards/3432dc3d-47da-4675-67ae-53adb1fdad5e');
            return response.data;
        } catch (error) {
            console.error('Error fetching card data:', error);
            throw error;
        }
    },
};
