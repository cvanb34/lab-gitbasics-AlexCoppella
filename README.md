# GitBasicsLab
First lab for SRU CPSC 317 students

The purpose of this lab is to give you hands on experience using git with GitHub. To earn full credit on the assignment you will write the functions in simpleMath.js, finish the markup in index.html, and write the additional click handlers needed in clickHandlers.js.

Additional criteria:
- Commit often with good commit messages
- feature branches should tie into what you are working on
- Variable names are explanatory
- Any work is cited from its source

## Git review / first feature
1. Clone the repository ```git clone```
2. Create a feature branch ```git checkout -b feature/simple-math-functions-yourname```
3. Implement and save absoluteValueSubtract function in simpleMath.js
4. Check status ```git status```
5. add changes to stage ```git add simpleMath.js```
6. Check status
7. commit changes to repository ```git commit -m"Completed absolute value subtract function```
8. Check status
9. Repeat steps 3 through 8 for remaining functions
10. Push feature branch to remote repository ```git push origin <name of feature branch>```
11. Open pull request from feature branch to master branch
12. Back in local terminal checkout master branch ```git checkout master```
13. Pull remote changes in ```git pull```

## To finish the lab
1. Following a similar flow to what is outlined above create and merge in feature branches that will contain the missing HTML markup for the remaining sections and the missing clickHandlers that correspond to that markup. 

|Section of site                  |Requirements                            |
|---------------------------------|----------------------------------------|
|Subtraction with absolute value  |Two inputs, button, a place for output  |
|Multiply by 10                   |One input, button, a place for output   |
|Random number generator          |One button, a place for output          |
