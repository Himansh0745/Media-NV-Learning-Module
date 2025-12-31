// ErrorHandling in using try...catch with async/await
//Example 1

async function fetchUser(){
    try{
        let response = await Promise.reject("Failed to fetch user data");
        console.log("User data:", response);
    } catch (error) {
        console.log("Error fetching user data:", error);
    }
}
fetchUser();


// Example 2 : Handling Network/ Api Errors(Real world Example)

async function getUserData(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log("User Data:", data);
    } catch (error) {
        console.log("Error fetching user data:", error);
    }
}
getUserData();