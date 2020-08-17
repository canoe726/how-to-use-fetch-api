export default class ContentSection {
    constructor({$target}) {
        this.$target = $target;
        this.data = null;

        this.section = document.createElement('section');
        this.section.className = 'content-section';
        this.$target.appendChild(this.section);

        this.render();
    }

    setState(data) {
        this.data = data[0];
        this.render();
    }

    setErrorMessage() {
        const dogName = document.querySelector('.dog-name');
        dogName.innerText = '오류가 발생했습니다.';
    }

    render() {
        this.section.innerText = '';

        const url = this.data ? this.data.url : './src/img/no-image.png';
        const { name } = this.data ? (this.data.breeds[0] ? this.data.breeds[0] : { name: '정보없음' })  : { name: '정보없음' };

        const dogContent = document.createElement('article');
        dogContent.className = 'dog-content';

        const dogImg = document.createElement('img');
        dogImg.className = 'dog-img';
        dogImg.src = url;

        const dogName = document.createElement('p');
        dogName.className = 'dog-name';
        dogName.innerText = name;

        dogContent.appendChild(dogImg);
        dogContent.appendChild(dogName);

        this.section.appendChild(dogContent);
    }
}