from fastapi import FastAPI, UploadFile, File, Form
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


MODEL = tf.keras.models.load_model("three.keras")
print(MODEL.summary())

CLASS_NAMES = ["Early Blight", "Late Blight", "Healthy"]


def read_file_as_image(data) -> np.ndarray:
    return np.array(Image.open(BytesIO(data)))


@app.get("/ping")
async def ping():
    return "Hloooo, Duniya (from FastAPI)"


# @app.post("/predict")
# async def predict(file: UploadFile = File(...)):
#     image = read_file_as_image(await file.read())
#     img_batch = np.expand_dims(image, 0)
#     predictions = MODEL.predict(img_batch)
#     # predictions = MODEL(img_batch)
#     prediction = predictions[0]
#     print(predictions, prediction)
#     predicted_class = CLASS_NAMES[np.argmax(prediction)]
#     confidence = np.max(prediction)
#     return {"class": predicted_class, "confidence": float(confidence)}


@app.post("/predict")
async def predict(
    email: str = Form(...), image: UploadFile = File(...), isChecked: bool = Form(...)
):
    print(image)
    image = read_file_as_image(await image.read())
    img_batch = np.expand_dims(image, 0)
    predictions = MODEL.predict(img_batch)
    # predictions = MODEL(img_batch)
    prediction = predictions[0]
    print(predictions, prediction)
    predicted_class = CLASS_NAMES[np.argmax(prediction)]
    confidence = np.max(prediction)
    return {"class": predicted_class, "confidence": float(confidence)}


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)
