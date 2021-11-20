document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0) {
        alert('Please enter a task')
    } else {
        document.querySelector('#task').innerHTML += `
          <div class="task" style="color: white; font-size: 20px">
            <h3 id="taskname">
                ${document.querySelector('#newtask input').value}
                </h3>
                <button class="delete">D</button>
                </div>
        `;
        var current_task = document.querySelectorAll('.delete');
        for(var i=0; i<current_task.length; i++) {
            current_task[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        var taskss = document.querySelectorAll('.task');
        for(var i=0; i<taskss.length; i++) {
            taskss[i].onclick = function() {
                this.classList.toggle('completed')
            }
        }
        document.querySelector('#newtask input').value = "";
    }
}