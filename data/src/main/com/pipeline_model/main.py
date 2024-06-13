from flask import Flask, request, jsonify
import cv2
import matplotlib.pyplot as plt
import random

app = Flask(__name__)


@app.route("/upload", methods=["POST"])
def upload_file():
    data = request.json

    file_path = data["file_path"]
    task = data["description"]

    if task == "image":
        img = cv2.imread(file_path)

        if img is None:
            return (
                jsonify({"message": "ERROR 400: Não foi possível abrir a imagem."}),
                400,
            )

        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

        return jsonify(
            {
                "message": "Imagem exibida com sucesso.",
                "score": random.random(),
                "target": random.choice(["FAKE", "REAL"]),
            }
        )

    elif task == "video":
        cap = cv2.VideoCapture(file_path)

        if not cap.isOpened():
            return (
                jsonify({"message": "ERROR 400: Não foi possível abrir o vídeo."}),
                400,
            )

        while True:
            ret, frame = cap.read()

            if not ret:
                break

            # cv2.imshow("frame", frame)

            if cv2.waitKey(1) == ord("q"):
                break

        return jsonify(
            {
                "message": "Vídeo exibido com sucesso.",
                "random_decimal": random.random(),
                "dynamic_value": random.choice(["FAKE", "REAL"]),
            }
        )


if __name__ == "__main__":
    app.run(port=8086)
