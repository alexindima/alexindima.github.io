function getXPath(element) {
    if (element.id) {
        return "id(\"" + element.id + "\")";
    }
    if (element === document.body) {
        return element.tagName;
    }

    let ix = 0;
    const siblings = element.parentNode.childNodes;
    for (let i = 0; i < siblings.length; i++) {
        const sibling = siblings[i];
        if (sibling === element) {
            return getXPath(element.parentNode) + "/" + element.tagName + "[" + (ix + 1) + "]";
        }
        if (sibling.nodeType === 1 && sibling.tagName === element.tagName) {
            ix++;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const editableElements = document.querySelectorAll("[contenteditable='true']");
    const resetButton = document.getElementById("reset-button");

    editableElements.forEach(element => {
        const path = getXPath(element);
        const savedContent = localStorage.getItem(path);
        if (savedContent) {
            element.innerHTML = savedContent;
        }
    });

    editableElements.forEach(element => {
        element.addEventListener("input", () => {
            const path = getXPath(element);
            localStorage.setItem(path, element.innerHTML);
            toggleResetButton();
        });
    });

    resetButton.addEventListener("click", () => {
        localStorage.clear();
        location.reload();
    });

    const hasChanges = () => {
        return Array.from(editableElements).some(element => {
            const path = getXPath(element);
            return localStorage.getItem(path) !== null;
        });
    };

    const toggleResetButton = () => {
        if (hasChanges()) {
            resetButton.classList.add("visible");
        } else {
            resetButton.classList.remove("visible");
        }
    };
    toggleResetButton();
});
