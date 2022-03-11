class createProject {
    // Template for building project instance.
    constructor(projectObj) {
        this.projectId = projectObj['projectId'],
        this.preview = projectObj['preview'];
        this.code = projectObj['code'];
        this.demo = projectObj['demo'];
        this.brand = projectObj['brand'];
        this.catchPhrase = projectObj['catchPhrase'];
        this.description = projectObj['description'];
        this.technologies = projectObj['technologies'];
    }
    // Create empty container.
    createProjectContainer(parentId) {
        /* 
        * @param parentId: string - (id selector) where the project container to be appended.
        * @return container: object - created <div> element.
        */
        const projectContainerTag = 'div';
        const container = document.createElement(projectContainerTag);
        const parent = document.getElementById(parentId);
        parent.appendChild(container);
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
    createPreview(parent) {
        /* 
        * @param parent: object - selected parent where the preview element needs to be appended.
        * @return previewImg: object - the created <img> element.
        */
        const previewTag = 'img';
        const previewImg = document.createElement(previewTag);
        parent.appendChild(previewImg);
        return previewImg;
    }
    // Create cta button for (code or demo).
    createDemoCta(ctaObj, parent) {
        /* 
        * @param ctaObj: object - contains the name('code' or 'demo'), status, href.
        * @param parent: object - (id selector) where the project container needs to be appended.
        * @return cta: object - the created <a> element.
        */
        const ctaTag = 'a';
        const cta = document.createElement(ctaTag);
        const ctaName = ctaObj['name'];
        cta.textContent = ctaName;
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
        const formatCatchPhrase = catchPhrase.split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1,)}`).join(' ');
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
            parent.appendChild(tagContainer);
            const tagElementsDetail = {
                div: tagContainer,
                span: tagSpanElement
            }
            tagElementsDetailArray.push(tagElementsDetail);
        }
    }
}
// Start rendering
const greadProject = {
    projectId: 0,
    preview: {},
    code: {
        name: 'code',
        status: 'available',
        href: './'
    },
    demo: {
        name: 'demo',
        status: 'available',
        href: './'
    },
    brand: 'gread',
    catchPhrase: 'your library of entertainment',
    description: 'A web application that allows user to keep a record of their favorite...',
    technologies: ['html', 'css', 'javascript', 'php', 'mysql']
}
const parentId = 'container';
// createProject template
let newProject = new createProject(greadProject);
const projectContainer = newProject.createProjectContainer(parentId); // empty div
// Adding attributes
const projectContainerAttr = {
    class: 'projectContainer',
}
newProject.addAttribute(projectContainerAttr, projectContainer);
const previewImg = newProject.createPreview(projectContainer); // preview or screenshot
const codeCta = newProject.createDemoCta(newProject['code'], projectContainer); // code cta
const demoCta = newProject.createDemoCta(newProject['demo'], projectContainer); // demo cta
const projectTitle = newProject.createProjectTitle({brand: newProject['brand'], catchPhrase: newProject['catchPhrase']}, projectContainer); // project title
const description = newProject.createDescription(newProject['description'], projectContainer); // description
const divider = newProject.createDetailsDivider(projectContainer); // horizontal divider
const technologiesHeading = newProject.createTechnologiesHeading(projectContainer); // technologies heading
const technologiesTag = newProject.createTechnologiesTag(newProject['technologies'], projectContainer); // technologies tags  