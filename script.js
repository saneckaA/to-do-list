{
    const tasks = [];

    
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="list__item${task.done ? " list__item--done" : ""}">
            ${task.content}
            </li>
            `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if(newTaskContent === "") {
            return;
        };

       addNewTask(newTaskContent);
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form")
        form.addEventListener("submit", onFormSubmit)
        render();
    };
    
    init();
}