% Specify the folder where the files live.
imageFolder = 'C:\Users\michaelz\Dev\MATLAB\Capstone\images';
filteredImageFolder = 'C:\Users\michaelz\Dev\MATLAB\Capstone\filtered_images';

% Check to make sure that folder actually exists.  Warn user if it doesn't.
if ~isfolder(imageFolder)
    errorMessage = sprintf('Error: The following folder does not exist:\n%s\nPlease specify a new folder.', imageFolder);
    uiwait(warndlg(errorMessage));
    imageFolder = uigetdir(); 
    if imageFolder == 0
         return;
    end
end

% Get a list of all files in the folder with the desired file name pattern.
filePattern = fullfile(imageFolder, ''); 
theFiles = dir(filePattern);

for k = 1 : length(theFiles)
    baseFileName = theFiles(k).name;
    fullFileName = fullfile(theFiles(k).folder, baseFileName);

    try
        RGB = imread(fullFileName);
        isValid = processImage(RGB);
        
        if(isValid)
            disp(fullFileName);
            
            sourceFile = fullFileName;
            destFile   = fullfile(filteredImageFolder, baseFileName);
            movefile(sourceFile, destFile);
        end
    catch
    end
end