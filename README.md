# Implementing React Router Part 1#
* Step 1 - Install the npm package by running npm i —save  react-router-dom 
* Step 2 - In index.js import BrowserRouter
* Step 3 - import Route from react-router-dom in your parent component (it will usually be App.js)
* Step 4 - Add <Route path={‘<name-of-the-path>‘} component={ <name-of-component />} to the return statement of App


# Improving user experience #
Would you want to be on a website that you had to manually type the routes on the url?
The answer to that question is 'no'.
Let's see what props React Router gives us.

* Add a button to have your user navigate to different pages
* use `history.push`

********* _5 mins break_ ********



# KEY QUESTIONS

- What is browser router, where should I put it, and why do I need it?
- What is the Route component and what can it do for me?
  - What goes in the “path” prop?
  - What does the “exact” prop do?
    - How is it different than the “strict” prop?
- What is the NavLink component and how can I use it?
  - What does the “activeClassName” prop do?
- What is the switch component? How is it useful?
_key questions by Graham @telegraham_

_form styling by https://www.w3schools.com/howto/howto_css_login_form.asp _










