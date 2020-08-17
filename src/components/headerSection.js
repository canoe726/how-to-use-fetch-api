export default class HeaderSection {
    constructor({$target, onRandom}) {
        this.$target = $target;
        this.onRandom = onRandom;

        this.section = document.createElement('section');
        this.section.className = 'header-section';
        this.$target.appendChild(this.section);

        this.render();
    }

    render() {
        const sectionName = document.createElement('p');
        sectionName.className = 'section-name';
        sectionName.innerText = 'Cute Dog Image';

        const getImgBtn = document.createElement('button');
        getImgBtn.className = 'get-img-btn';
        getImgBtn.innerText = '🐶';    
        
        getImgBtn.addEventListener('click', () => { this.onRandom(); });

        this.section.appendChild(sectionName);
        this.section.appendChild(getImgBtn);
    }
}