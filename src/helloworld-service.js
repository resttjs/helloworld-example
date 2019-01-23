// Import the required classes from Restt
import { Restt, Service, Resource, Response } from 'restt';

// Create a hello world service
const helloworld = new Service({

  // Define the origin of the service (change 'helloworld.restt.io' to your domain)
  origin: 'https://helloworld.restt.io',
  
  // Define the list of resources
  resources: [
    
    // Bind a resource to the service
    new Resource({

      // Define the endpoint (https://helloworld.restt.io/helloworld)
      endpoint: '/helloworld',

      // Define the resource protocol
      method: 'GET',
      
      // Define the response of the resource
      response() {

        // Create a response to send to the client
        return new Response({

          // Define the body of the response
          body: {
            message: 'hello world!'
          }
        });
      }
    })
  ]
});

// Create the Restt application
const app = new Restt();

// Bind the service to the application
app.use(helloworld);