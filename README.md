# Age and Gender Detection using Deep Learning

## 📌 Overview
This project uses **OpenCV DNN** with pre-trained **Caffe models** to detect faces in images or video streams and predict the **age group** and **gender** of each detected face.  
It demonstrates how computer vision and deep learning can be applied to demographic attribute prediction.

## 🚀 Features
- Face detection using OpenCV's deep learning-based face detector.
- Gender classification (**Male/Female**).
- Age group estimation across 8 categories:  
  `(0-2), (4-6), (8-12), (15-20), (25-32), (38-43), (48-53), (60-100)`.
- Works with both images (`--image path/to/img.jpg`) and webcam streams.

## 📂 Models Used
- **Face Detection**: `opencv_face_detector_uint8.pb`, `opencv_face_detector.pbtxt`
- **Age Prediction**: `age_net.caffemodel`, `age_deploy.prototxt`
- **Gender Prediction**: `gender_net.caffemodel`, `gender_deploy.prototxt`

## ⚙️ Requirements
- Python 3.x  
- OpenCV >= 4.x  
- Pre-trained Caffe models (included or downloadable from OpenCV model zoo)

Install dependencies:
```bash
pip install opencv-python
```

▶️ Usage

Run with webcam:

```bash
python age_gender_detection.py
```

Run on an image:

```bash
python age_gender_detection.py --image sample.jpg
```