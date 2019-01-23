<p align="center">
  <a href="https://restt.io" target="_blank">
    <img src="https://i.imgur.com/nAlPbln.png">
  </a>
</p>

***

A simple "hello world" edge worker service built with [Restt](https://github.com/resttjs/restt) and [Restt-CLI](https://github.com/resttjs/restt-cli).<br>

### Getting started

Once you've cloned or downloaded this repository you'll want to open terminal in the project root and install the packages:<br>

```bash
$ npm install
```

You should successfully have installed the required dependencies now.<br>

### Setting up your project

Open up the `src` directory and you should find a file named `src/helloworld-service.js` which looks like this:<br>

###### src/helloworld-service.js
```js
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
```

Open this file in [VSCode](https://code.visualstudio.com/) or your code editor of choice.<br>

You'll see the `origin` is being set to `https://helloworld.restt.io`.<br>

Replace `helloworld.restt.io` with your domain name (e.g. `avocado.unicorn.ai`) you'll be deploying to production with.<br>

### Serving and testing your services locally

Now that you've finished setting up your project you can proceed to serving your edge worker services locally with Restt-CLI:<br>

```bash
$ restt serve src/helloworld-service.js
```

Once served you can test your edge worker services are working correctly - let's connect to our resource using curl (you'll need to replace for your domain again):</br>

```bash
$ curl http://localhost:3000/helloworld.restt.io/helloworld
```

If everything is working correctly then curl should output the following:<br>

```bash
{
  "message": "helloworld!"
}
```

### Distributing your service with Cloudflare Workers

Please ensure that [configured cloudflare in your restt.config.json](https://github.com/resttjs/restt-cli/blob/README.md#configuration) you have also registered for Cloudflare Workers on your Cloudflare account.<br>

You're now ready to deploy your edge worker services in production with Cloudflare Workers using Restt-CLI:<br>

```bash
$ restt deploy src/helloworld-service.js
```

Congratulations - you've succesfully built and shipped your services to the edge using Cloudflare Workers and Restt!<br>

Check out the [collection of more complex examples](https://github.com/resttjs/complex-example) which also includes a [Provider](#provider) using [Stripe](https://stripe.com) and [WorkersKV](https://developers.cloudflare.com/workers/kv/).<br>

You can also check out the full [Restt Documentation](https://github.com/resttjs/restt#readme) and [Restt-CLI Documentation](https://github.com/resttjs/restt-cli#readme).