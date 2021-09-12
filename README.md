# log_neural_net
1. An Artificial Neural Network **(ANN)** for **synthetically** generating **sonic logs** from **conventional petro-physical logs**, using a optimized neural network pipeline written in **TensorFlow** (Keras) - **Python**. The pipe-line is hyper-prametrically tuned.
2. For interacting with this Neural Network, a web-based **Front-end**, implemented in **ReactJS** has been provided.  

### Note:
The design and implementation of this ANN can be found at:
[ANN for Sonic Logs Prediction](https://github.com/paritosh5feb/Neural_Networks_for_logs_generation)

### Credits:
1. [Paritosh Kumar Rakesh](https://www.linkedin.com/in/paritosh-kumar-rakesh-b06416175/)
2. [Mayank Rakesh](https://www.linkedin.com/in/mayank-rakesh-/)

## ReactJS Based Front-end
![Imgur](https://i.imgur.com/xHobxDj.png)

## Working Components
This whole set-up has 2 main components:
1. **Front-End**: ReactJS based - providing user interface for interacting with the Neural Network.
2. **Back-end**: Django Server hosting the Neural Network.
The user selects the test file from from the UI in POST request and sends it to the back-end (django) for prediction. The django application running in the back-end loads the pre-trained ANN, receives the file from the POST request, cleans the data and feeds it to the loaded model. The prediction results are then returned in form of JSON.
![Imgur](https://i.imgur.com/qkxCtlm.png)
