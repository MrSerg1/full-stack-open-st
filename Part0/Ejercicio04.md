sequenceDiagram

    Note right of browser: The browser executes the JS code activating the event handler.

    browser -->>server: POST https://studies.cs.helsinki.fi/exampleapp.com/new_note
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    bowser -->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server -->>browser: the data in a json file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

