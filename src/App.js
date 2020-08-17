import HeaderSection from './components/headerSection.js';
import ContentSection from './components/contentSection.js';

import { api } from './api/theDogApi.js';

export default class App {
    constructor($target) {
        this.$target = $target;

        const headerSection = new HeaderSection({
            $target,
            onRandom: async () => {
                const request = await api.fetchRandom();
                if(!request.isError) {
                    const data = await request.data;
                    contentSection.setState(data);
                } else {
                    contentSection.setErrorMessage();
                }
            }
        });
        
        const contentSection = new ContentSection({
            $target
        });
    }
}