/*
    for a react app we need a 'build worklow'

    # Why do we need a build workflow?

        this allows for the code to be optimised (code should 
        be as small as possible and as optimised as possible for performance reason)

        we should also use next-gen JS (this is the React standard) 
            this means that we need a workflow that supports these features 
            (a compiler and a preprocessor)

            we must be able to write ES6 + code but ship code that runs on as many browsers as
            possible (not many browsers support ES6 + features, so we need a workflow that
            compiles these features)

            next gen JS also makes us more productive (more condesed code + css auto-prefixing)

            # CSS prefixes allow our CSS to be read across all browsers

            # Linting




    # How do we achieve a build workflow?
            
                we need a dependency management tool (like npm) 
                    *necessary for React dependencies, build tool (JS compiler)

                we need a bundler (webpack)
                    we want to run code that is well bundles (but the code is split in fewer
                    files when shipped to prod)

                we need a compiler (Babel + pre-sets)

                we need a development server (a web server that runs on our machine)
*/
