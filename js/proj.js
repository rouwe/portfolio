class createProject {
    // Template for building project instance.
    constructor(projectObj) {
        this.preview = projectObj['preview'];
        this.code = projectObj['code'];
        this.demo = projectObj['demo'];
        this.brand = projectObj['brand'];
        this.catchPhrase = projectObj['catchPhrase'];
        this.description = projectObj['description'];
        this.technologies = projectObj['technologies'];
    }
    // Create empty container.
    createProjectContainer(parentId=null, parent) {
        /* 
        * @param parentId: string - (id selector) where the project container to be appended.
        * @return container: object - created <div> element.
        */
       const projectContainerTag = 'div';
       const container = document.createElement(projectContainerTag);
        if (parentId !== null) {
            const parentElement = document.getElementById(parentId);
            parentElement.appendChild(container);
        } else {
            parent.appendChild(container);
        }
        return container;
    }
    // Add element attribute(s).
    addAttribute(attributesObj, element) {
        /* 
        * @param attributesObj: object - contains the attributes name and value.
        * @param element: string - (id selector) where the project container needs to be appended.
        */
        for (const attrKey in attributesObj) {
            let attrValue = attributesObj[attrKey]; 
            element.setAttribute(attrKey, attrValue);
        }
    }
    // Create preview element.
    createPreviewImg(pictureObj, parent) {
        /* 
        * @param parent: object - selected parent where the preview element needs to be appended.
        * @return previewImg: object - the created <img> element.
        */
        const previewTag = 'picture';
        const previewPicture = document.createElement(previewTag);

        for (const source in pictureObj['sources']) {
            if (source != 'small') {
                const newSource = document.createElement('source');
                newSource.setAttribute('class', 'preview-img');
                newSource.setAttribute('media', pictureObj['sources'][source]['media']);
                newSource.setAttribute('srcset', pictureObj['sources'][source]['srcset']);
                previewPicture.appendChild(newSource);
            }
            else {
                const img = document.createElement('img');
                img.setAttribute('class', 'preview-img');
                img.setAttribute('src', pictureObj['sources'][source]['src']);
                img.setAttribute('alt', pictureObj['sources'][source]['alt']);
                previewPicture.appendChild(img);
            }
        }

        parent.appendChild(previewPicture);
        return previewPicture;
    }
    // Create cta button for (code or demo).
    createDemoCta(ctaObj, parent, tag = null) {
        /* 
        * @param ctaObj: object - contains the name('code' or 'demo'), status, href.
        * @param parent: object - (id selector) where the project container needs to be appended & source code Availability
        * @return cta: object - the created <a> element.
        */
        const ctaTag = 'a';
        let cta = document.createElement(ctaTag);
        if (tag !== null) {
            cta = document.createElement(tag);
        }
        const ctaName = ctaObj['name'];
        cta.textContent = ctaName;
        if (ctaName == 'demo') {
            const devicesBox = document.createElement('div');
            devicesBox.setAttribute('class', 'cta-demo-device-box');
            const mobileCta = document.createElement(ctaTag);
            mobileCta.textContent = 'mobile';
            const desktopCta = document.createElement(ctaTag);
            desktopCta.textContent = 'desktop';
            const devicesArr = {
                mobile: mobileCta,
                desktop: desktopCta
            };
            for (const device in devicesArr) {
                devicesArr[device].setAttribute('class', 'cta-demo-device');
                let deviceURL = ctaObj['href'][device];
                if (deviceURL === '' || deviceURL === undefined) {
                    deviceURL = '#';
                }
                switch(device) {
                    case 'mobile':
                        mobileCta.setAttribute('href', deviceURL);
                        break;
                    case 'desktop':
                        desktopCta.setAttribute('href', deviceURL);
                        break;
                }
            }
            devicesBox.appendChild(desktopCta);
            devicesBox.appendChild(mobileCta);
            cta.appendChild(devicesBox);
        }
        parent.appendChild(cta);
        return cta;
    }
    // Create project title with (brand & catchphrase).
    createProjectTitle(brandObj, parent) {
        /*
        * @param brandObj: object - contains the title, and catchphrase of the project.
        * @param parent: object - selected parent where the preview element needs to be appended.
        * @return projectTitleElement: object - created <h2> element.
        */
        const brandName = brandObj['brand'], catchPhrase = brandObj['catchPhrase'];
        const formatBrandName = `${brandName[0].toUpperCase()}${brandName.slice(1,)}`;
        let formatCatchPhrase = "";
        if (catchPhrase.length > 0) {
            formatCatchPhrase = catchPhrase.split(' ')[0][0].toUpperCase() + catchPhrase.slice(1,);
        }
        const projectTitleTextNode = document.createTextNode(`${formatBrandName} - ${formatCatchPhrase}`);
        const projectTitleElement = document.createElement("h2");
        projectTitleElement.appendChild(projectTitleTextNode);
        parent.appendChild(projectTitleElement);
        return projectTitleElement;
    }
    // Create description
    createDescription(descriptionText, parent) {
        /*
        * @param descriptionText: string - text node value for description.
        * @param parent: object - selected parent where the description needs to be appended.
        * @return description: object - the created <p> element.
        */
        const description = document.createElement('p');
        const descriptionTextNode = document.createTextNode(descriptionText);
        description.appendChild(descriptionTextNode);
        parent.appendChild(description);
        return description;
    }
    // Create divider
    createDetailsDivider(parent) {
        /*
        * @param parent: object - selected parent where the divider element needs to be appended.
        * @return divider: object - the created <hr> element.
        */
        const divider = document.createElement('hr');
        parent.appendChild(divider);
        return divider;
    }
    // Create technologies tag heading
    createTechnologiesHeading(parent) {
        /*
        * @param parent: object - selected parent where the technologies heading element needs to be appended.
        * @return headingElement: object - the created <h2> element.
        */
        const headingTextNode = document.createTextNode('Technologies');
        const headingElement = document.createElement('h3');
        headingElement.appendChild(headingTextNode);
        parent.appendChild(headingElement);
        return headingElement;
    }
    // Create technologies tag
    createTechnologiesTag(technologiesArray, parent) {
        /*
        * @param technologiesArray: array - collection of technology used.
        * @param parent: object - selected parent where the divider element needs to be appended.
        * @return tagElementsDetailArray: array - an array of object where each object contains the tag container (<div>) and tag text (<span>) objects.
        */
        let tagElementsDetailArray = [];
        for (const technology of technologiesArray) {
            const tagContainer = document.createElement('div');
            const tagTextNode = document.createTextNode(technology);
            const tagSpanElement = document.createElement('span');
            tagSpanElement.appendChild(tagTextNode);
            tagContainer.appendChild(tagSpanElement);
            tagSpanElement.setAttribute('class', 'technologies-tag');
            tagContainer.setAttribute('class', 'technologies-tag-box');
            parent.appendChild(tagContainer);
            const tagElementsDetail = {
                div: tagContainer,
                span: tagSpanElement
            }
            tagElementsDetailArray.push(tagElementsDetail);
        }
    }
}
function startProjectRendering(jsonFile) {
    // Fetch
    fetch(jsonFile)
    .then((response) => response.json())
    .then((data) => {
        const projectsArray = data['projects'];
        if (projectsArray.length < 1) {
            // Display project error notice
            const projectError = document.getElementsByClassName('project-error-notice')[0];
            projectError.style.display = 'block';
        }
        const parentId = 'container';

        // Start rendering
        // Iterate through all projects
        for (const project of projectsArray) {
            // Project component instance
            let newProject = new createProject(project);
            const projectBrand = newProject['brand'];            
            // Project Container
            const projectContainer = newProject.createProjectContainer(parentId);
            newProject.addAttribute({
                id: newProject['brand'],
                class: 'project-container'
            }, projectContainer);
            // Preview Box
            const previewContainer = newProject.createProjectContainer(null, projectContainer);
            newProject.addAttribute({class: 'preview-box'}, previewContainer);
            const previewImg = newProject.createPreviewImg(newProject['preview'], previewContainer); // Screenshot
            newProject.addAttribute({
                class: 'preview-img',
            }, previewImg);
            // Preview Cta Box
            const previewCtaContainer = newProject.createProjectContainer(null, previewContainer);
            newProject.addAttribute({class: 'preview-cta-box'}, previewCtaContainer);
            const ctaArray = [newProject['code'], newProject['demo']]; // code & demo cta
            for (const cta of ctaArray) {
                const ctaName = cta['name'];
                const ctaClass = 'cta-' + ctaName;
                const ctaURL = cta['href'];
                let currentCta = null;
                if (ctaName == 'code') {
                    currentCta = newProject.createDemoCta(cta, previewContainer);
                    newProject.addAttribute({href: ctaURL}, currentCta);
                }
                else if (ctaName == 'demo') {
                    const tag = 'button'
                    currentCta = newProject.createDemoCta(cta, previewContainer, tag);
                }
                newProject.addAttribute({class: ctaClass}, currentCta);
                previewCtaContainer.appendChild(currentCta);
            }
            // Project Details Box
            const detailsContainer = newProject.createProjectContainer(null, projectContainer);
            newProject.addAttribute({class: 'details-box'}, detailsContainer);
            // Project Texts (Title, catchphrase, and description)
            const detailsText = newProject.createProjectContainer(null, detailsContainer);
            newProject.addAttribute({class: 'details-text'}, detailsText);
            const projectTitle = newProject.createProjectTitle({
                brand: projectBrand,
                catchPhrase: newProject['catchPhrase']
            }, detailsText);
            newProject.addAttribute({class: 'details-title'}, projectTitle);
            const detailsDescription = newProject.createDescription(newProject['description'], detailsText);
            newProject.addAttribute({class: 'details-description'}, detailsDescription);
            // Details divider
            const detailsDivider = newProject.createDetailsDivider(detailsContainer);
            newProject.addAttribute({class: 'details-divider'}, detailsDivider); 
            // Technologies Box
            const technologiesContainer = newProject.createProjectContainer(null, detailsContainer);
            newProject.addAttribute({class: 'details-technologies-box'}, technologiesContainer);
            const technologiesHeading = newProject.createTechnologiesHeading(technologiesContainer);
            newProject.addAttribute({class: 'details-technologies-heading'}, technologiesHeading);
            const technologiesTagsContainer = newProject.createProjectContainer(null, technologiesContainer);
            newProject.addAttribute({class: 'technologies-tags-container'}, technologiesTagsContainer);
            const technologiesTags = newProject.createTechnologiesTag(newProject['technologies'], technologiesTagsContainer);
            
        }    
    })
    .catch((error) => {
        console.warn('Warning: There\'s no project available yet.');
        // Display project error notice
        const projectError = document.getElementsByClassName('project-error-notice')[0];
        projectError.style.display = 'block';
    })
};
// Set current and home URL
const currentUrl = document.URL;
const homeUrl = ['http://127.0.0.1:5500/',
'http://127.0.0.1:5500/#', 
'http://127.0.0.1:5500/index.html', 
'http://127.0.0.1:5500/index.html#',
'http://127.0.0.1:5500/index.html/#', 
'https://rouwe.github.io/roweme/',
'https://rouwe.github.io/roweme/index.html',
'https://rouwe.github.io/roweme/#'];
const projectsUrl = ['http://127.0.0.1:5500/projects.html', 'https://rouwe.github.io/roweme/projects.html'];
// Featured projects
if (homeUrl.includes(currentUrl)) {
    const homeJson = './js/data.json';
    startProjectRendering(homeJson);
} else if (projectsUrl.includes(currentUrl)) {
    const projectsJson = './js/projects.json';
    startProjectRendering(projectsJson);
}
// Add event listener for cta demo buttons
const checkForPreviewBox = setInterval(addCtaDemoEvent, 1000); // Check rendered elements every 1s
function addCtaDemoEvent() {
    const previewBoxArray = document.getElementsByClassName('preview-box');
    if (previewBoxArray.length > 0) {
        const demoCtaArray = document.getElementsByClassName('cta-demo');
        for (const demoCta of demoCtaArray) {
            demoCta.addEventListener('click', toggleDemoOption);
        }
        clearInterval(checkForPreviewBox);
    }
}
function toggleDemoOption() {
    /* Toggle demo options (desktop or mobile)
    */
    const deviceBox = this.getElementsByClassName('cta-demo-device-box')[0];
    let displayState = deviceBox.style.display;
    if (displayState === '') {
        // Set display state to default
        displayState = deviceBox.style.display = 'none';
    }
    // Modify style
    if (displayState === 'none') {
        displayState = 'flex';
        deviceBox.style.display = displayState;
    } else {
        displayState = 'none';
        deviceBox.style.display = displayState;
    }
}