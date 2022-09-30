import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='question-container'>
            <h2 style={{textAlign:'center' , marginBottom: '50px'}}>Questions</h2>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How does react work?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>  react is a libraries not fomeWork.it has jsx,virtual dom,props and state,component.JSX is a JavaScript syntax extension used in React element creation.React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.single pices in component and when it send and recive it is props.It changes whenever a user interacts with the application, rendering a new UI</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Difference between props and state?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
            <p> React uses data transmission props that we need to transfer to various components. The difference comes in which component the data are owned. State is owned locally and the component itself updates it.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      useEffect use except api fetching?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      useEffect(callback, dependencies) is the hook that manages the side-effects in functional components. callback argument is a function to put the side-effect logic. dependencies is a list of dependencies of your side-effect: being props or state values.

useEffect(callback, dependencies) invokes the callback after initial mounting, and on later renderings, if any value inside dependencies has changed.   

The next step to mastering useEffect() is to understand and avoid the infinite loop pitfall.
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Question;