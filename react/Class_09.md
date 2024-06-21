2. what is coutom hooks?
--> hooks is just a javascript function.

1. why we use hooks>
--> for reusebility , readibility


3.  custom hooks return something according the user need

const offline = useOffline()
so offline varibale got some value


 const params = useParams();
  const { id } = params;
  console.log(id);

const [restaurant, menuItems] = useRestaurantData(id);

--> this useRestaurantData function return two variable
function useRestaurantData() {
    //code 
    return [restaurant , itemMenu]
}

4. now we have create the project so every bundler create the js file and that one js file has all code realated to the project and when we upload on the server so our project become very slow so removing this problem we have to use the concept of
code spliting , lazy loading , dynamic bundling , chunking , this is all are same but has differen differen name
# all code of the project included in index.js file and upload on the server that thing become the project very slow 
# so we can do in which we create the small small file and  when the user click on particular link according the link upload the file on server

const Cart = lazy(()=> import('../src/Components/Cart'))

this line create the new file and it is not a part of the index.js main file and when user click on the Cart section so when cart.js file upload on the server.

this process is known as a on demand loading.