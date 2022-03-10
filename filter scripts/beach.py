import re
import numpy as np
import shutil, os

from setuptools_scm import iter_matching_entrypoints

f = open(r'C:\Users\michaelz\Dev\MATLAB\Capstone\NVIDIA\label.txt', 'r')
labelText = f.read()

# find nvidia data
filteredNvidiaLabels = re.findall('"(nvidia[^"]*\.jpg)"', labelText)

filteredNvidiaLabels1 = re.findall('"(nvidia-01[^"]*\.jpg)"', labelText)
filteredNvidiaLabels2 = re.findall('"(nvidia-02[^"]*\.jpg)"', labelText)

newLabels = np.concatenate((filteredNvidiaLabels1, filteredNvidiaLabels2))

# for label in filteredNvidiaLabels:
    # imageNumber = re.findall('(?<=\_)(.*?)(?=\_)', label)[0]
    # folderNumber = re.findall('(?<=\-)(.*?)(?=\_)', label)[0]

dirname = os.path.dirname(__file__)
print(dirname)
for label in newLabels:
    imageNumber = re.findall('(?<=\_)(.*?)(?=\_)', label)[0]
    imageNumber = imageNumber.zfill(6)
    folderNumber = re.findall('(?<=\-)(.*?)(?=\_)', label)[0]

    dst = os.path.join(dirname, folderNumber, imageNumber+".jpg")
    src = os.path.join(dirname, "NVIDIA", folderNumber, imageNumber+".jpg")
    shutil.copyfile(src, dst)

    print(imageNumber)

