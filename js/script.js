// FOR CHANGING BACKGROUND COLORS
document.getElementById('bg-selector')
    .addEventListener('click', function () {
        const colors = ['#FFB6A3', '#AEE2FF', '#A7F3D0', '#FFF7A3', '#D8B4FE', '#FFD8A8', '#B5F5EC', '#000000'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.background = randomColor;
    });

// TASK ASSIGNED
const taskButton = document.querySelectorAll('.complete');
for (const button of taskButton) {
    button.addEventListener('click', function () {
        // FIRST ALERT
        alert('Board Updated Successfully');

        // TASK ASSIGNED PLUS
        let navElement= document.getElementById('nav_task');
        let navTask = parseInt(navElement.innerText);

        // TASK ASSIGNED MINUS
        let taskElement = document.getElementById('task');
        let task = parseInt(taskElement.innerText);

        // TASK ASSIGNED 
        if (task > 0) {
            taskElement.innerText = task - 1;
            navElement.innerText= navTask+1;
        }
        
        // BUTTON DISABLED
        button.disabled = true;
        button.style.cssText = 'background-color: #ccc; color: #666; border: 2px solid #aaa; cursor: not-allowed;';

        // HISTORY SELECT
        const historyP = document.createElement('p');
        historyP.style.cssText = "text-align: left; margin-top: 15px; font-weight: 600; font-size:15px; background: #eceefa; padding:10px 20px; border-radius:16px";

        const taskTitle = this.closest('.task-container').querySelector('.title').innerText;
        historyP.innerText = `You have completed the task ${taskTitle} at ${new Date().toLocaleTimeString('en-US')}`;

        document.getElementById('history').appendChild(historyP);

        
        // SECOND ALERT
        if(task-1 == 0){
            alert('Congrates!!! You have completed all the task')
        }
    });
}

// DATE CHANGE
const options = {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
};

document.getElementById('date').innerText = new Date().toLocaleString('en-US', options);

// HISTORY REMOVE
document.getElementById('remove')
    .addEventListener('click', function () {
        const history = document.getElementById('history');
        history.innerHTML = '';
    })