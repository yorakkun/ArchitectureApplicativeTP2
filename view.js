class TaskRenderer {
    render(task) {
        throw new Error("Render method must be implemented.");
    }
}

class RedTaskRenderer extends TaskRenderer {
    render(task) {
        return `<div class="task travail">${task.description}</div>`;
    }
}

class BlueTaskRenderer extends TaskRenderer {
    render(task) {
        return `<div class="task maison">${task.description}</div>`;
    }
}

class GreenTaskRenderer extends TaskRenderer {
    render(task) {
        return `<div class="task divers">${task.description}</div>`;
    }
}

function getRenderer(category) {
    switch (category) {
        case 'travail': return new RedTaskRenderer();
        case 'maison': return new BlueTaskRenderer();
        case 'divers': return new GreenTaskRenderer();
        default: throw new Error("Unknown category.");
    }
}

function updateDisplay(tasks) {
    const tasksContainer = document.getElementById('tasksContainer');
    tasksContainer.innerHTML = "";
    tasks.forEach(task => {
        const renderer = getRenderer(task.category);
        const taskElement = renderer.render(task);
        tasksContainer.innerHTML += taskElement;
    });
}
