## React Phone Input 2 Server Side Rendering

This repository highlights how the `react-iphone-input-2` react component breaks
when rendered on the server.

To run simply install the dependencies `npm i` and run `npm run start`

Good practive is to bulid React comopnent with universal application in mind.

To do this, we simply need to account for global variables that may not be defined in
different javascript environments. i.e Node.js in this case.

From the error logs you can ses that the `self` is defined. A global variable that
is not defined in Node.js.

![error](http://grmrc.xyz/42322V3c3c2F/Image%202018-05-25%20at%202.22.20%20PM.png)
