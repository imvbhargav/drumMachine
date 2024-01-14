# freeCodeCamp's FrontFront End Development Libraries Certification Project
## Drum Machine
### Tests Passed: 6/8
#### Technology Stack
1. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!
#### Tests
1. I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements
2. Within #drum-machine I can see an element with corresponding id="display".
3. Within #drum-machine I can see 9 clickable "drum pad" elements, each with a class name of "drum-pad", a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
4. Within each .drum-pad, there should be an HTML5 <audio> element which has a src attribute pointing to an audio clip, a class name of "clip", and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
7. When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique). 109ms

### Tests Failed: 2/8
1. When I click on a .drum-pad element, the audio clip contained in its child <audio> element should be triggered.
2. When I press the trigger key associated with each .drum-pad, the audio clip contained in its child <audio> element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).

### Cause of test failures:
Taken different approach to work with audio in React, instead of using multiple useRefs for each audio element, just used one useRef to map with 
audio and changed its audio source.

***
[Deployed on Vercel](https://dm-by-imvbhargav.vercel.app)