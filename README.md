# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

If I could only choose one of the thre eotions, I would choose to fit my automated tests within a github action that runs whenever code is pushed. I think this is important beacuse other checks can run in the pieline that may alter your code (either with formatting or style) and so it is a good idea to make sure the tests get run after all of this too and is passing all of the tests at this stage at the very last stage before it can get pushed into the main branch.

2) No
3) From the way the quesiton is formatted, it looks like the feature involves mmay parts of thee application front end and back end components seem to be involved. Unit testing is best used when dealing with induvidual parts of code. So, this means testing one function and seeing if it returns the right value given certain paramteters. But, testing a feature like messaging that invovles many parts does not seem feasable for unit testing.
4) Yes, it seeems like testing the “max message length” feature would involve teesting a single function that does this check. With this, unit tests could be made that would check that by given various parameters to thee function and making sure the correct output is returned.