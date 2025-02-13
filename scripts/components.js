class CVSection extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name') || '';
        const content = this.innerHTML;
        this.innerHTML = `
            <div class="main-group">
                <div class="main-group__header">${name}</div>
                <div class="main-group__body">${content}</div>
            </div>
        `;
    }
}

class CVExperience extends HTMLElement {
    connectedCallback() {
        const date = this.getAttribute('date') || 'No date';
        const role = this.getAttribute('role') || 'No role';
        const company = this.getAttribute('company') || 'No company';
        const technologies = this.getAttribute('technologies') || 'No technologies';

        const content = this.innerHTML;

        this.innerHTML = `
            <div class="cv-experience">
                <div class="cv-experience__info">
                    <span class="cv-experience__date">${date}</span>
                    <span class="cv-experience__title">${role}</span>
                    <span class="cv-experience__company">${company}</span>
                </div>
                <div class="cv-experience__body">
                    <ul class="cv-experience__details">
                        ${content}
                    </ul>
                    <div class="cv-experience__used-technologies">
                        <span class="cv-experience__used-technologies-title">Used technologies: </span>
                        <span class="cv-experience__used-technologies-body">${technologies}</span>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('cv-section', CVSection);
customElements.define('cv-experience', CVExperience);
