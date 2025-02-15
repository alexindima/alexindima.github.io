class CVSection extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name');

        const content = this.innerHTML;
        this.innerHTML = `
            <div class="main-group">
                <div class="main-group__header">${name}</div>
                <div class="main-group__body">${content}</div>
            </div>
        `;
    }
}

class CVContacts extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="contacts">
                <p class="contacts__item"><span class="contacts__item--title">Email: </span><a class="contacts__item--link" href="mailto:alexindima@gmail.com" target="_blank">alexindima@gmail.com</a></p>
                <p class="contacts__item"><span class="contacts__item--title">Telegram: </span><a class="contacts__item--link" href="https://t.me/@Avenging_Archangel" target="_blank">@Avenging_Archangel</a></p>
                <p class="contacts__item"><span class="contacts__item--title">LinkedIn: </span><a class="contacts__item--link" href="https://www.linkedin.com/in/dmitrii-aleksin/" target="_blank">in/dmitrii-aleksin</a></p>
                <p class="contacts__item"><span class="contacts__item--title">GitHub: </span><a class="contacts__item--link" href="https://github.com/alexindima" target="_blank">alexindima</a></p>
            </div>
        `;
    }
}

class CVLanguage extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute("name");
        const dots = parseInt(this.getAttribute("dots"));
        const filled = parseInt(this.getAttribute("filled"));
        const level = this.getAttribute("level");
        const shortLevel = this.getAttribute("short-level");

        let dotHTML = "";
        for (let i = 0; i < dots; i++) {
            if (i === filled - 1) {
                dotHTML += `<span class="dot dot--filled dot--highlight" data-level="${shortLevel}"></span>`;
            } else {
                dotHTML += `<span class="dot ${i < filled ? "dot--filled" : "dot--unfilled"}"></span>`;
            }
        }

        this.innerHTML = `
            <div class="language-item">
                <span class="language-name">${name}</span>
                <div class="language-info">
                    <div class="language-dots">${dotHTML}</div>
                    <span class="language-level">${level}</span>
                </div>
            </div>
        `;
    }
}

class CVExperience extends HTMLElement {
    connectedCallback() {
        const date = this.getAttribute('date');
        const position = this.getAttribute('position');
        const company = this.getAttribute('company');
        const technologies = this.getAttribute('technologies');

        const content = this.innerHTML;
        this.innerHTML = `
            <div class="cv-experience">
                <div class="cv-experience__info">
                    <span class="cv-experience__title">${position}</span>
                    <span class="cv-experience__date">${date}</span>
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

class CVPersonalProject extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute('name');
        const date = this.getAttribute('date');
        const technologies = this.getAttribute('technologies');

        const content = this.innerHTML;
        this.innerHTML = `
            <div class="cv-personal-project">
                <span class="cv-personal-project__title">${name}</span>
                <span class="cv-personal-project__date">${date}</span>
                <div class="cv-personal-project__used-technologies">
                    <span class="cv-personal-project__used-technologies-title">Used technologies: </span>
                    <span class="cv-personal-project__used-technologies-body">${technologies}</span>
                </div>
                <ul class="cv-personal-project__details">
                    ${content}
                </ul>
            </div>
        `;
    }
}

class CVEducation extends HTMLElement {
    connectedCallback() {
        const date = this.getAttribute('date');
        const degree = this.getAttribute('degree');
        const company = this.getAttribute('company');
        const tags = this.getAttribute('tags');

        const content = this.innerHTML;
        this.innerHTML = `
            <div class="cv-education">
                <div class="cv-education__info">
                    <span class="cv-education__title">${degree}</span>
                    <span class="cv-education__date">${date}</span>
                    <span class="cv-education__company">${company}</span>
                </div>
                <div class="cv-education__body">
                    <ul class="cv-education__details">
                        ${content}
                    </ul>
                    <div class="cv-education__tags">
                        <span class="cv-education__tags-title">Tags: </span>
                        <span class="cv-education__tags-body">${tags}</span>
                    </div>
                </div>
            </div>
        `;
    }
}

class CVCertificate extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute("name");
        const pdf = this.getAttribute("pdf");
        const image = this.getAttribute("image");

        this.innerHTML = `
            <div class="certificate">
                <a href="${pdf}" target="_blank">
                    <img class="certificate__image" src="${image}" alt="${name}">
                </a>
                <p class="certificate__name">📜 ${name}</p>
            </div>
        `;
    }
}

customElements.define('cv-section', CVSection);
customElements.define("cv-contacts", CVContacts);
customElements.define("cv-language", CVLanguage);
customElements.define('cv-experience', CVExperience);
customElements.define('cv-personal-project', CVPersonalProject);
customElements.define('cv-education', CVEducation);
customElements.define("cv-certificate", CVCertificate);
