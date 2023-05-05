# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: I am not sure I would have to reference my notes
 
Researched answer: Student would be the froeign key and we would have to create syntax that identifies the Student key with the cohort primary key. The syntax would look like the following: class Student < ApplicationRecord
  belongs_to :cohort
end

2. Which RESTful routes must always be passed params? Why?

Your answer:I do not remember I would have to research 

Researched answer: The RESTful routes that must always take a parameter are the following:
Index - which will display all of the instances of a particulare resource
Update - which will update specific information related to the instances
Destroy - which will delete a specific resource instance
Create - which will create a new instance to add to our database

3. Name three rails generator commands. What is created by each?

Your answer: rails generate model will create a new model, rails generate resource will generate a new resource, and Rspec does some form of testing.

Researched answer:rails generate model can be used to create a model such as "vehicle" and you can create several vehicles with different attributes according to that model. rails generate resource can be used to create a resoruce such as "animal" that can be referenced to create several different animal models with different features. The Rspec command ensures the dependacies for the test driven development are installed. This helps to define what pieces of information are necessary for the app to respond properly.  

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
"Get" would call the index method which will display of of the instances of the data.

action: "POST" location: /students
"Post" will call upon the create method which will allow the developer to add new instances of data. For example if there was a model named "students" the developer could potentially add a new student named Jeremy.

action: "GET" location: /students/new
"Get" will display a list of all of the data that was created

action: "GET" location: /students/2

This for of "Get" will allow the developer to loooks at the specific instance at ID:2

action: "GET" location: /students/2/edit

This particular "Get" will allow the developer to look up and edit information related to a particular instance at ID:2

action: "PATCH" location: /students/2
Patch is a method that can be used to update information related to a particular instance. For example if you have an instance called "Book" and wanted to add another feature to highlight the length of the book, you could use the "Patch" method to do so.


action: "DELETE" location: /students/2

The "delete" will get rid of all the information associate with the particular student at ID:2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. Paul is a fitness trainer who needs to be able to track the completed workouts of his clients.

2. Sarah is a teacher who needs to manage the time of each lesson to keep a balanced workflow.

3. Danny is student who needs to be able to check off comepleted tasks to keep his work assignments organized

4. Tim is a forgetful business man who needs notifications send to him to remind him of his meetings.

5. Kelly is a stay at home mother who wants ideas for activities and needs templates that can help generate ideas and can be modified.

6. Miguel has started his weight loss journey. He would like a emoji celebration each time he has compled a workout for positive feedback.

7. Britney struggles with procastinationand needs a particular feature that will notify her as to what particular tasks are priority.

8. Derek is a workaholic and needs an alarm to remind him when to stop working and take breaks.

9. Michelle is a ceo of a fortune 500 company. She likes to get feedback and wants monthly reports that identify goals met versus taks not completed so she can make proper adjustments.

10. Tony is a Sales manager and it is difficut for him to blance his personal emails along with his professional emails. He would like reminders throughout the day to set particular times to focus on those emails without distractions. 

