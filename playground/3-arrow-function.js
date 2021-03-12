//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    
}

const getTasksToDo = (tasks) =>{
    const ar = tasks.tasks;
    const ans =[];
    const answer = ar.forEach((t)=>{
            // console.log(t.completed)
        if(t.completed===false){
            ans.push(t)
            // console.log(t)
        }
    })

    console.log(ans)

} 

getTasksToDo(tasks)
// console.log(tasks.getTasksToDo())