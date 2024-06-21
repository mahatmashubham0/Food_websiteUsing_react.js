1. what is react fragement
--> in jsx we can write the only one parent element in jsx code and react.fragement is react component that come from react package.

2. whenever we create the src folder and insert all neccessery file into it so always change the 
--> </head>
<body>
    
    <div id="root"></div>

    <script type="module" src="./src/app.js"></script> // change the src path also so that find the html code 
    
</body>
</html>

3. what is virtual dom in react ?
--> virtual dom is represention of the actuall Dom . that represent the necessery manipulation of the dom . react crrate the virtual dom in memroy . it does all the necessary manipulating, before making the changes in the browser DOM. that is done by reconciliation

4. what is reconciliation in react js?
--> reconciliation is process that use the diff algoritham to determine to find out the tree which need to be updated . it will rerender the specific the component of your app which is mount by the diff algorithm.

5. why react is fast?
--> beacuse it use the concept of the virtual dom

6. why we do use key?
--> beacuse if we give the unique key and add new component so it will only render the specific componenet rather than all componenet.

7. what is react fiber?
--> react fiber is new reconciliation engine . that came in react 16. 

8. why we need the virtual dom?
--> we need the virtual dome for the reconcilization.