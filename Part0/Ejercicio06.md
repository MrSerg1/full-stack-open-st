sequenceDiagram
    participant browser
    participant server

    browser: executes JavaScript code

    browser -->>server: POST  https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    browser: update notes
    deactivate server

    browser -->>browser: update the notes and render the new_note following the JS code.

    