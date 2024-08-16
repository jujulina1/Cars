const url = `http://localhost:3000`



export async function getAllCars() {
    

   const response = await fetch(`${url}/data/cars`);
   const data = await response.json();
   return data;

   //TEST With no Cars
   //return []

}
export async function getCarById(carId) {

   const response = await fetch(`${url}/data/cars/${carId}`);
   const data = await response.json();
   return data;

}
export async function createCar({brand, model, description,  year, image, price}, accessToken) {

   const options = {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
          'X-Authorization': accessToken
      },
    body: JSON.stringify({ brand, model, description, year, image, price })
  }
   return await fetch(`${url}/data/cars`, options)
  

}
export async function editCar({brand, model, description,  year, image, price}, carId, accessToken) {
 
   const options = {
      method: 'put',
      headers: {
          'Content-Type': 'application/json',
          'X-Authorization': accessToken
      },
    body: JSON.stringify({ brand, model, description, year, image, price })
  }
  return await fetch(`${url}/data/cars/${carId}`, options)
  

}
export async function deleteCar(carId, accessToken){
   const options = {
      method: 'delete',
      headers: {
          'Content-Type': 'application/json',
          'X-Authorization': accessToken
      }
   }
   return await fetch(`${url}/data/cars/${carId}`, options)
}
// Comment service
export async function createComment(comment, carId, accessToken) {

 
   const options = {
      method: 'post',
      headers: {
          'Content-Type': 'application/json',
          'X-Authorization': accessToken
      },
    body: JSON.stringify( comment )
  }
  
   return await fetch(`${url}/data/comments/${carId}`, options)
  

}

// GET COMMENTS OF CURRENT CAR
export async function getAllComments(carId) {
    

   const response = await fetch(`${url}/data/comments/${carId}`);
   const data = await response.json();
   return data;

   //TEST With no Comments
   //return []

}

