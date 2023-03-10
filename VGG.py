from keras.applications.vgg16 import VGG16
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.vgg16 import preprocess_input,decode_predictions
import numpy as np

model = VGG16(weights='imagenet')

def Create_Model():
    model = VGG19(weights='imagenet')
    return model

def Imgage_Output(image_path: str):
    img = image.load_img(image_path,color_mode='rgb', target_size=(224, 224))
    x = image.img_to_array(img)
    x = np.expand_dims(x, axis=0) 
    x = preprocess_input(x)
    features = model.predict(x)
    p = decode_predictions(features)  
    predictions = []
    rotton_apple = 0
    for i in range(0,len(p[0])):
        predictions.append(p[0][i][1])
        if(p[0][i][2] < 0.5):
            rotton_apple -=-1
    if(rotton_apple == 5):
        predictions.clear()
        predictions.append('Unrecognized Object')
    return predictions