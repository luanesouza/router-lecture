# Objectives of this lecture #

Understand how react-router works at a high level
Be able to implement react-router
Identify react-router weird behaviors and know how to prevent them from happening
Use the keyword exact
Use <Switch> to change between routes
Use <Route> to render a specific component using ‘component’ or ‘render’ prop to pass custom props
Use <Link> to replace <a> tags
User <Redirect> to prevent our users from getting lost (aka hitting 404)
*BONUS* Use ‘withRouter’ HOC to add in router props to any component
_by Kevin McLean_

## Implementing React Router Part 1 ##
* Step 1 - Install the npm package by running npm i —save  react-router-dom 
* Step 2 - In index.js import BrowserRouter
* Step 3 - import Route from react-router-dom in your parent component (it will usually be App.js)
* Step 4 - Add <Route path={‘<name-of-the-path>‘} component={ <name-of-component />} to the return statement of App


## Improving user experience ##
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
    -> https://stackoverflow.com/questions/52275146/usage-of-exact-and-strict-props
- What is the NavLink component and how can I use it?
    `<NavLink exact activeClassName="active" to="/path1">`
    `<NavLink exact activeClassName="active" to="/path2">`
 -> https://www.codementor.io/packt/using-the-link-and-navlink-components-to-navigate-to-a-route-rieqipp42
  - What does the “activeClassName” prop do?
- What is the switch component? How is it useful?
_key questions by Graham @telegraham_

_form styling by https://www.w3schools.com/howto/howto_css_login_form.asp _
