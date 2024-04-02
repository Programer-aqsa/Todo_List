import inquirer from "inquirer";


let todos=[];
let condition=true;


while(condition){
let answers = await inquirer.prompt([
    {
        name:"todo",
        message:"what you want to add in your Todos?",
        type:"input",
    },
    {
        name:"addMore",
        message:"Do you want to add more?",
        type:"confirm",
        default:"false"
    },
]);

todos.push(answers.todo);
condition=answers.addMore
console.log(todos);
}