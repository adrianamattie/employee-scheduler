# employee-scheduler
Employee
 - name
 - rate (link with employee rate)
 - skills [array of work skill objects]
Manager
 - name
 - rate (link with employee rate)s
 - employees [ array of employees]
EmployeeRate
 - name
 - hourly_rate (money)
WorkSkill
 - name
 - level
Project
 - name
 - description
 - requirements [ array of work skill objects]
 - budget
 - start_date
 - end_date
 - employees [ array of employees ]
 - budgetRemaining
   - project budget - (sum of employee_rates)
1) Create a bunch of work skills
   - Save the JSON to a text file (fs)
2) Create a bunch of employee rates
   - Save the JSON to a text file (fs)
3) Start the app
   - User has the choice to 
    a) create an employee/manager
       - Load an employee/manager using the Factory Pattern (https://en.wikipedia.org/wiki/Factory_method_pattern)
       - Enter the name
       - Pick a rate from the list of rates
       - Add several skills from list of skills (loop over a specific prompt)
       - When done write to disk (fs)
    b) From user input create a project
       - Enter the name
       - Enter the description
       - Add requirments from list of skills (loop over a specific prompt)
       - Enter the budget
       - Enter start_date and end_date
       - Add Employees from list of employees that match project requirements
        - Cannot add employee if out project over budget
       - When done write to disk (fs)
    c) From user input update a project
       - Search the list of projects for the name
       - Load the project using the Factory Pattern Factory Pattern (https://en.wikipedia.org/wiki/Factory_method_pattern)
       - Once loaded the project should output if the project is over budget or not
       - Add requirements from work skills
       - Add employees from list of employees whose skills match the project requirements
        - Cannot add employee if out project over budget
       - When done write to disk (fs)
 4) Modularization
    - Employee, EmployeeRate, WorkSkill, Project, ProjectEmployee modules
    - Rquire those modules in the project and employee creation file
 5) Save to Firebase
    - Save/Retrieve objects to firebase instead of disk